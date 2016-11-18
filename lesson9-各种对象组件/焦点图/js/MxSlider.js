/*
* ###################################################
* #                                                 #
* #    Author: Marko Maksym                         #
* M    WebSite: http://blognauki.in.ua/my-works/    M
* #    Project name: MX-SLIDER                      #  
* #    E-mail: markomaksym@gmail.com                #
* X    Date of creation: 04.10.2016                 X
* #    Last Modified:                               #
* #                                                 #
* ###################################################
*/

;( function( $ ){

	$.defaultConfig = {
		nav: true, // create forward and backward buttons. If set to "false", the navigation will not be
		dots: false, // buttons to navigate
		timeSlide: 1000, // the length of time 
		autoPlay: false, // autoPlay
		autoPlaySpeed: 5000 // autoPlay speed
	};

	$.fn.MxSlider = function( params ){
		var settings = $.extend( {}, $.defaultConfig, params );
		SliderPerform( this, settings );
	};

	function SliderPerform( root, settings ){

		/* ---------------------------------------------
		*                Create slider
		----------------------------------------------*/
		var
		countSlide,
		heightSlide,
		CreateSlider = {

			CreateClass: function(){
				root.addClass( 'mx-slider_wrap' );
			},

			CreateWrap: function(){
				root.wrap( '<div class="MxSlider"></div>' );
			},

			CreateNavigation: function(){
				if( settings.nav == true ){
					$( '<div class="mx-navigation"><div class="mx-prev">Предыдущий</div><div class="mx-next">Следующий</div></div>' ).appendTo( '.MxSlider' );
				}				
			},

			CreateItemSlider: function(){
				root.children().addClass( 'mx-slide' );
			},

			GetHeightItem: function(){
				heightSlide = root.children().eq(0).height() - 4;
				setTimeout( function(){ root.css( 'height', heightSlide + 'px' ); }, 500 );
			},

			GetCountSlide: function(){
				countSlide = root.children( '.mx-slide' ).length;			
			},

			SetZIndex: function(){
				var i = countSlide;
				$( '.mx-slide' ).each( function(){
					$(this).css( 'z-index', i-- );
				} );				
			},

			CreateDonsNavigation: function(){
				if( settings.dots == true ){
					$( '<div class="mx-nav_dots"></div>' ).appendTo( '.MxSlider' );
					var d = 1;
					$( '.mx-slide' ).each( function(){
						$( '<span>' + d + '</span>' ).appendTo( '.mx-nav_dots' );
						d++;
					} );
					$( '.mx-nav_dots span' ).eq( 0 ).addClass( 'dotActive' );
					
				}
			},

			// Init function
			init: function(){
				// add class
				this.CreateClass();
				// create wrapper
				this.CreateWrap();
				// add class children item
				this.CreateItemSlider();
				// get count slides
				this.GetCountSlide();
				// set z-index for slide
				this.SetZIndex();
				// get height
				this.GetHeightItem();
				// create navigation
				this.CreateNavigation();
				// create dots-navigation
				this.CreateDonsNavigation();
			}
		};

		/* Initialise */ 
		CreateSlider.init();

		/* -------------------------------------------------
		*                Functions slider
		--------------------------------------------------*/

		// func play next
		function PlayNext(){
			if( keyMotion == true ){
				keyMotion = false;

				$( '.mx-slide' ).each( function(){
					if( $( this ).css( 'z-index' ) == countSlide ){
						$( this ).animate( { 'left': '-100%' }, settings.timeSlide );
					}
				});

				setTimeout( function(){

					$( '.mx-slide' ).each( function(){
						getZi = $( this ).css( 'z-index' );
						$( this ).css( 'z-index', parseInt( getZi ) + 1 );
					} );

					$( '.mx-slide' ).each( function(){
						if( $( this ).css( 'z-index' ) == countSlide + 1 ){
							$( this ).css( 'z-index', '1' );
							$( this ).css( 'left', '0%' );
						}								
					} );

					// dots active
					if( settings.dots == true ){

						$( '.mx-slide' ).each( function(){
							zInex = $( this ).css( 'z-index' );
							if( zInex == countSlide ){
								nthChild = $( this ).index();
								if( nthChild == countSlide ){
									nthChild = 0;
								}
								$( '.mx-nav_dots span' ).removeClass( 'dotActive' );
								$( '.mx-nav_dots span' ).eq( nthChild ).addClass( 'dotActive' );						
							}					
						} );

					}
					keyMotion = true;
				}, settings.timeSlide + 100 );

			}	
		}

		// func play back
		function PlayBack(){
			if( keyMotion == true ){
				keyMotion = false;

				$( '.mx-slide' ).each( function(){
					if( $( this ).css( 'z-index' ) == 1 ){
						$( this ).css( 'left', '-100%' );
					}
				});

				setTimeout( function(){

					$( '.mx-slide' ).each( function(){
						getZi = $( this ).css( 'z-index' );
						$( this ).css( 'z-index', parseInt( getZi ) - 1 );
					} );

					$( '.mx-slide' ).each( function(){
						if( $( this ).css( 'z-index' ) == 0 ){
							$( this ).css( 'z-index', countSlide );
							$( this ).animate(  { 'left': '0%' }, settings.timeSlide  );
						}
					} );

				},100 );

				setTimeout( function(){
					// dots active
					if( settings.dots == true ){

						$( '.mx-slide' ).each( function(){
							zInex = $( this ).css( 'z-index' );
							if( zInex == countSlide ){
								var nthChild = $( this ).index();
								$( '.mx-nav_dots span' ).removeClass( 'dotActive' );
								$( '.mx-nav_dots span' ).eq( nthChild ).addClass( 'dotActive' );						
							}					
						} );

					}
					keyMotion = true;
				}, settings.timeSlide + 200 );	

			}
		}

		// func autoplay
		function AutoPlay(){
			if( settings.autoPlay == true ){				
				autoPlayInit = setInterval( function(){
					PlayNext();
				},settings.autoPlaySpeed );
			}
		}

		// func autoplay amend
		function AutoPlayAmend(){
			clearInterval( autoPlayInit );
			AutoPlay();
		}

		/*-------------------------------------------------
		*               Functional init
		--------------------------------------------------*/

		var
		keyMotion = true,
		autoPlayInit = null,
		MotionSlide = {

			NextSlide: function(){
				$( '.mx-next' ).on( 'click', function(){
					PlayNext();
					AutoPlayAmend();
				} );
			},

			PrevSlide: function(){
				$( '.mx-prev' ).on( 'click', function(){
					PlayBack();
					AutoPlayAmend();
				});
			},

			AutoPlayInt: function(){
				AutoPlay();
			},

			DotsMotion: function(){
				$( '.mx-nav_dots span' ).on( 'click', function(){
					AutoPlayAmend();
					var thisDonNum = $( this ).text(),
						thisSilderNth;

					$( '.mx-slide' ).each( function(){
						thisSilderZI = parseInt( $( this ).css( 'z-index' ) );
						if( thisSilderZI == countSlide ){
							thisSilderNth = $( this ).index() + 1;								
						}
					} );
					
					if( thisSilderNth < thisDonNum && keyMotion == true ){
						var dotIntervalNext = setInterval( function(){
								keyMotion = false;
								if( thisSilderNth != thisDonNum ){

										$( '.mx-slide' ).each( function(){
											if( $( this ).css( 'z-index' ) == countSlide ){
												$( this ).animate( { 'left': '-100%' }, 200 );
											}
										});

										setTimeout( function(){

											$( '.mx-slide' ).each( function(){
												getZi = $( this ).css( 'z-index' );
												$( this ).css( 'z-index', parseInt( getZi ) + 1 );
											} );

											$( '.mx-slide' ).each( function(){
												if( $( this ).css( 'z-index' ) == countSlide + 1 ){
													$( this ).css( 'z-index', '1' );
													$( this ).css( 'left', '0%' );
												}								
											} );

											// dots active
											if( settings.dots == true ){

												$( '.mx-slide' ).each( function(){
													zInex = $( this ).css( 'z-index' );
													if( zInex == countSlide ){
														nthChild = $( this ).index();														
														$( '.mx-nav_dots span' ).removeClass( 'dotActive' );
														$( '.mx-nav_dots span' ).eq( nthChild ).addClass( 'dotActive' );						
													}					
												} );

											}	

										}, 300 );

								} else{
									clearInterval( dotIntervalNext );
									keyMotion = true;
								}								
								thisSilderNth++;
						},400 );

					} else if( thisSilderNth > thisDonNum && keyMotion == true ){

						var
						dotIntervalPrev = setInterval( function(){
							keyMotion = false;
							if( thisSilderNth != thisDonNum ){

								$( '.mx-slide' ).each( function(){
									if( $( this ).css( 'z-index' ) == 1 ){
										$( this ).css( 'left', '-100%' );
									}
								});

								setTimeout( function(){

									$( '.mx-slide' ).each( function(){
										getZi = $( this ).css( 'z-index' );
										$( this ).css( 'z-index', parseInt( getZi ) - 1 );
									} );

									$( '.mx-slide' ).each( function(){
										if( $( this ).css( 'z-index' ) == 0 ){
											$( this ).css( 'z-index', countSlide );
											$( this ).animate(  { 'left': '0%' }, 200  );
										}
									} );

									// dots active
									if( settings.dots == true ){

										$( '.mx-slide' ).each( function(){
											zInex = $( this ).css( 'z-index' );
											if( zInex == countSlide ){
												nthChild = $( this ).index();												
												$( '.mx-nav_dots span' ).removeClass( 'dotActive' );
												$( '.mx-nav_dots span' ).eq( nthChild ).addClass( 'dotActive' );						
											}					
										} );

									}	

								},100 );

							} else{
								clearInterval( dotIntervalPrev );
								keyMotion = true;
							}							
							thisSilderNth--;
						},400 );					

					}
				} );
			},

			// Motion function
			ContrMotion: function(){
				// next slider
				this.NextSlide();
				// prev slider
				this.PrevSlide();
				// autoPlay
				this.AutoPlayInt();
				// dots
				this.DotsMotion();
			}
			
		};

		/* Controller */
		MotionSlide.ContrMotion();

		// responsive
		var resize;
		$( window ).resize( function(){
			clearTimeout( resize );
			resize = setTimeout( function(){
				heightSlide = root.children().eq(0).height() - 4;
				root.css( 'height', heightSlide + 'px' );
			},600 );
		} );
		
	}

} )( jQuery );