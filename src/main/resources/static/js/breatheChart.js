var left;
var center;
var right;
$.ajax({
	url:"/info/point2dSet",
	data:{'patientDataId':2},
	type: "POST",
	async:true,
	dataType:"json",
	success: function(data) {
		left = data.left;
		center = data.center;
		right = data.right;
		$(function () {                                                                     
			$(document).ready(function() {                                                  
				Highcharts.setOptions({                                                     
					global: {                                                               
						useUTC: false                                                       
					}                                                                       
				});                                                                         
				var chart;         
				$('#container').highcharts({                                                
					chart: {                                                                
						type: 'spline',                                                     
						animation: Highcharts.svg, // don't animate in old IE               
						marginRight: 10,                                                    
						events: {                                                           
							load: function() {                                              
								// set up the updating of the chart each second             
								var l_series = this.series[0],
								c_series = this.series[1],
								r_series = this.series[2],
								i = 0;                                
								setInterval(function() {                                    
									l_series.addPoint([left[i].x, left[i].y], true, true);                    
									c_series.addPoint([center[i].x, center[i].y], true, true);                    
									r_series.addPoint([right[i].x, right[i].y], true, true);  
									i++;
								}, 150);                                                   
							}                                                               
						}                                                                   
					},                                                                      
					title: {                                                                
						text: '呼吸速率'                                            
					},                                                                      
					xAxis: {                                                                
						type: 'datetime',                                                   
						tickPixelInterval: 100                                              
					},                                                                      
					yAxis: {                                                                
						title: {                                                            
							text: '呼吸速率'                                                   
						},                                                                  
						plotLines: [{                                                       
							value: 0,                                                       
							width: 1,                                                       
							color: '#808080'                                                
						}]                                                                  
					},                                                                      
					tooltip: {                                                              
						formatter: function() {                                             
								return '<b>'+ this.series.name +'</b><br/>'+                
								Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
								Highcharts.numberFormat(this.y, 2);                         
						}                                                                   
					},                                                                      
					legend: {                                                               
						enabled: true                                                      
					},                                                                      
					exporting: {                                                            
						enabled: false                                                      
					},                                                                      
					series: [{                                                              
						name: 'left', 
						marker:{//线上数据点
			            	radius:0,
			            	lineWidth:0,
			            	lineColor:'#fba845',
			            	fillColor:'#fba845',
			            	states:{
			            		hover:{
			            			enabled:false
			            		}
			            	}
			            },
						data: (function() {                                                 
							// generate an array of random data                             
							var data = [],                                                  
								time = left[0].x;
							for (i = -60; i <= 0; i++) {                                    
								data.push({                                                 
									x: time + i * 150,                                     
									y: 140                                        
								});                                                         
							}
							return data;                                                    
						})()                                                                
					},{                                                              
						name: 'center', 
						marker:{//线上数据点
			            	radius:0,
			            	lineWidth:0,
			            	lineColor:'#fba845',
			            	fillColor:'#fba845',
			            	states:{
			            		hover:{
			            			enabled:false
			            		}
			            	}
			            },
						data: (function() {                                                 
							// generate an array of random data                             
							var data = [],                                                  
								time = center[0].x;
							for (i = -60; i <= 0; i++) {                                    
								data.push({                                                 
									x: time + i * 150,                                     
									y: 330                                        
								});                                                         
							}
							return data;                                                    
						})()                                                                
					},{                                                              
						name: 'right',  
						marker:{//线上数据点
			            	radius:0,
			            	lineWidth:0,
			            	lineColor:'#fba845',
			            	fillColor:'#fba845',
			            	states:{
			            		hover:{
			            			enabled:false
			            		}
			            	}
			            },
						data: (function() {                                                 
							// generate an array of random data                             
							var data = [],                                                  
								time = right[0].x;  
							for (i = -60; i <= 0; i++) {                                    
								data.push({                                                 
									x: time + i * 150,                                     
									y: 190                                        
								});                                                         
							}
							return data;                                                    
						})()                                                                
					}]                                                                      
				});                                                                         
			});                                                                             
																							
			});  
	}
})