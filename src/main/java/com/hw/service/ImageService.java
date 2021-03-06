package com.hw.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.hw.dao.ImageMapper;
import com.hw.exception.ErrorCode;
import com.hw.exception.HwException;
import com.hw.model.Image;
import com.hw.tools.FileUtils;

@Service
public class ImageService {
	
	public static final short ORIGINAL = 1,PROCESSED = 2;
	
	@Value("${file.upload.path}")
	public String fileUploadPath;

	@Autowired
	private ImageMapper imageMapper;
	
	public void saveOriginalImg(Image image) throws IOException {
		String filename = new Date().getTime() + ".png";
		File path = new File(fileUploadPath + "originalImage");
		if (!path.exists()) {
			System.out.println("create dir " + path.getAbsolutePath());
			path.mkdirs();
		}
		path = new File(path, filename);
    	FileUtils.saveImage(image.getPath(), path);
    	image.setPath(fileUploadPath + "originalImage/" + filename);
    	image.setType(ORIGINAL);
    	imageMapper.save(image);
	}
	
	public void saveProcessedImg(Image image) throws IOException {
		String filename = new Date().getTime() + ".png";
		File path = new File(fileUploadPath + "processedImage");
		if (!path.exists()) {
			System.out.println("create dir " + path.getAbsolutePath());
			path.mkdirs();
		}
		path = new File(path, filename);
    	FileUtils.saveImage(image.getPath(), path);
    	image.setPath(fileUploadPath + "processedImage/" + filename);
    	image.setType(PROCESSED);
    	imageMapper.save(image);
	}
	
	/**
	 * 查询视频截图原图
	 */
	public List<Image> getOriginalImage(Integer patientDataId){
		return imageMapper.findByType(ORIGINAL);
	}
	
	/**
	 * 查询视频截图编辑后图片
	 */
	public List<Image> getProcessedImage(Integer patientDataId){
		return imageMapper.findByType(PROCESSED);
	}
	
	/**
	 * 查询原图和编辑后的图片
	 */
	public List<Image> getOriginalAndProcessedImage(Integer patientDataId){
		return imageMapper.findAll(new Specification<Image>() {

			private static final long serialVersionUID = -4710613362535875930L;

			@Override
			public Predicate toPredicate(Root<Image> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
				// TODO Auto-generated method stub
				List<Predicate> list = new ArrayList<>();
				list.add(criteriaBuilder.equal(root.get("type").as(short.class),1));
				list.add(criteriaBuilder.equal(root.get("type").as(short.class),2));
				Predicate[] predicates = new Predicate[list.size()];
				list.toArray(predicates);
				return criteriaBuilder.or(predicates);
			}
		});
	}
	
	/**
	 * 删除图片byID
	 * @throws HwException 
	 */
	public void deleteImageById(Long id) throws HwException{
		List<Image> list = imageMapper.findByImageId(id);
		if (list == null || list.size() == 0) {
			throw new HwException(ErrorCode.非法参数, "没有对应id的图片");
		}
		File image = new File(list.get(0).getPath());
		image.delete();
		imageMapper.deleteById(id);
	}
}
