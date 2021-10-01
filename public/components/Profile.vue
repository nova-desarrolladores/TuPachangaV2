<template>    
<div class="text-black-50">
            <section class="background-cover bg-transparenciano-notanto pb-5 pt-5 position-relative  text-light" style="background-image:url('assets/images/perfil.jpg');">
            <div class="container mt-5 pb-5 pt-5">
                <div class="pb-5">
                    <div class="text-center mt-5">
                        
                        <p class="lead mb-5"> </p>
                        <p class="lead mb-5"> </p>
                        
                    </div>
                </div>
            </div>
        </section>
    <link rel="stylesheet" href="https://allyoucan.cloud/cdn/icofont/1.0.1/icofont.css" integrity="sha384-jbCTJB16Q17718YM9U22iJkhuGbS0Gd2LjaWb4YJEZToOPmnKDjySVa323U+W7Fv" crossorigin="anonymous">

<div class="container">
    <div class="row">
        <div class="col-md-3">
            <div class="osahan-account-page-left shadow-sm bg-white h-100">
                <div class="border-bottom p-4">
                    <div class="osahan-user text-center">
                        <div class="osahan-user-media">
                            <h1 class="mb-2">Perfil</h1>
                            <img class="mb-3 rounded-pill shadow-sm mt-1"  style="width: 125px;" src="assets/images/Misc/avatar_noexistente.jpg">
                            <div class="osahan-user-media-body">
                                <h6 class="mb-2">Juan Cachopo</h6>
                                <p class="mb-1">7710000000</p>
                                <p><i class="icofont-email"></i> juanchachopo@fakemail.com</p>
                                <p class="mb-0 text-black font-weight-bold"><a class="text-primary mr-3" data-toggle="modal" data-target="#edit-profile-modal" href="#"><i class="icofont-ui-edit"></i> EDITAR</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <ul id="myTab" class="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4" role="tablist">
                    <li class="nav-item">
                        <a id="calendario-tab" class="nav-link" data-toggle="tab" href="#" role="tab" aria-controls="orders" aria-selected="false"><i class="icofont-calendar"></i> Calendario</a>
                        <a id="pedidos-tab" class="nav-link" data-toggle="tab" href="#" role="tab" aria-controls="orders" aria-selected="false"><i class="icofont-food-cart"></i> Pedidos</a>
                        <a id="notificaciones-tab" class="nav-link" data-toggle="tab" href="#" role="tab" aria-controls="orders" aria-selected="false"><i class="icofont-inbox"></i> Notificaciones</a>
                        <a id="seguridad-tab" class="nav-link" data-toggle="tab" href="#" role="tab" aria-controls="orders" aria-selected="false"><i class="icofont-shield"></i> Seguridad</a>
                        <a id="cancelacion-tab" class="nav-link" data-toggle="tab" href="#" role="tab" aria-controls="orders" aria-selected="false"><i class="icofont-ban"></i> Cancelación de la cuenta</a>
                        <a id="cerrar-tab" class="nav-link" data-toggle="tab" href="#" role="tab" aria-controls="orders" aria-selected="false"><i class="icofont-close-circled"></i> Cerrar sesión</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-9">
            <div class="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                <div id="myTabContent" class="tab-content">
                    <div id="orders" class="tab-pane  fade  active show" role="tabpanel" aria-labelledby="orders-tab">
                        <h4 class="font-weight-bold mt-0 mb-4">Pedidos pasados</h4>
                        <div class="bg-white card mb-4 order-list shadow-sm">
                            <div class="gold-members p-4">
                                <a href="#">
                                </a>
                                <div class="media">
                                    <a href="#">
                                        <img class="mr-4"  style="width: 225px;" src="assets/images/shutterstock_245726512-scaled-940x940.jpg">
                                    </a>
                                    <div class="media-body">
                                        <a href="#">
                                            <span class="float-right text-secondary">Pedido el Martes, 12/Nov/2019, 7:18 PM <i class="icofont-check-circled text-success"></i></span>
                                        </a>
                                        <h6 class="mb-2">
                                            <a href="#"></a>
                                            <a href="#" class="text-black">Rizotes el Payasón</a>
                                        </h6>
                                        <div class="align-items-center d-flex justify-content-between">
                                    <div class="pb-1 pt-1">
                                        <a href="#" class="link-dark text-decoration-none">
                                            
                                            <h6 class="fs-6 mb-1">Espectáculos &gt; Infantil &gt; Actuaciones &gt; Payasos</h6>
                                            <h3 class="fs-6 h6 mb-1">
                                                <p></p>
                                            </h3>
                                        </a>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" class="me-1 text-primary">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                                    </g>
                                                </svg>
                                            <span class="align-middle fw-light">Pachuca y alrededores, Hidalgo (ver mapa)</span>
                                        </div>
                                        
                                    </div>
                                    <div class="align-items-center d-flex justify-content-between">
                                    <div class="pb-1 pt-1">
                                        <span class="me-1 text-primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"/>
                                                    </g>
                                                </svg></span>
                                        <span class="align-middle">15 críticas</span>
                                    </div></div>
                                    <a class="btn btn-primary ms-2 p-2 rounded-pill" href="#" aria-label="Add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" class="d-block">
                                                <g>
                                                    <path fill="none" d="M0 0H24V24H0z"/>
                                                    <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/>
                                                </g>
                                            </svg></a>
                                </div>
                                        <hr>
                                        <div class="float-right">
                                            <a class="btn btn-sm btn-outline-primary" href="#"><i class="icofont-headphone-alt"></i> Escribir</a>
                                            <a class="btn btn-sm btn-primary" href="#"><i class="icofont-refresh"></i> Volver a pedir</a>
                                        </div>

                                        <p class="mb-0 text-black text-primary pt-2"><span class="text-black font-weight-bold"> Pagado:</span> $500
                                        </p>


                                        <div class="pb-1 pt-1">
                                        <span class="align-middle">Tu evaluación: </span>
                                        <span class="me-1 text-primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                        
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"/>
                                                    </g>
                                                </svg></span>
                                        
                                    </div>
                                        <p class="mb-0 text-black text-primary pt-2"><span class="text-black font-weight-bold"> Comentaste:</span>
                                        </p>

                                        <h3 class="fs-6 h6 mb-1">
                                                <p>Gran humor y mejor puesta en escena. Los niños se lo pasaron como nunca y tuvo tooooda la paciencia del mundo con ellos</p>
                                            </h3>

                                    </div>
                                </div>

                            </div>
                        </div>


                        <div class="bg-white card mb-4 order-list shadow-sm">
                            <div class="gold-members p-4">
                                <a href="#">
                                </a>
                                <div class="media">
                                    <a href="#">
                                        <img class="mr-4"  style="width: 225px;" src="assets/images/tacos-canasta-chicharron.jpg">
                                    </a>
                                    <div class="media-body">
                                        <a href="#">
                                            <span class="float-right text-secondary">Pedido el Martes, 12/Nov/2019, 7:18 PM <i class="icofont-check-circled text-success"></i></span>
                                        </a>
                                        <h6 class="mb-2">
                                            <a href="#"></a>
                                            <a href="#" class="text-black">Tacos de canasta <i>El Chicharrón</i></a>
                                        </h6>
                                        <div class="align-items-center d-flex justify-content-between">
                                    <div class="pb-1 pt-1">
                                        <a href="#" class="link-dark text-decoration-none">
                                            
                                            <h6 class="h6 mb-1">Catering &gt; Antojitos &gt; Tradicional &gt; Tacos</h6>
                                            <h3 class="fs-6 h6 mb-1">
                                                <p></p>
                                            </h3>
                                        </a>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" class="me-1 text-primary">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                                    </g>
                                                </svg>
                                            <span class="align-middle fw-light">Pachuquilla, Hidalgo</span>
                                        </div>
                                        
                                    </div>
                                    <div class="align-items-center d-flex justify-content-between">
                                    <div class="pb-1 pt-1">
                                        <span class="me-1 text-primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"/>
                                                    </g>
                                                </svg></span>
                                        <span class="align-middle">42 críticas</span>
                                    </div></div>
                                    <a class="btn btn-primary ms-2 p-2 rounded-pill" href="#" aria-label="Add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" class="d-block">
                                                <g>
                                                    <path fill="none" d="M0 0H24V24H0z"/>
                                                    <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/>
                                                </g>
                                            </svg></a>
                                </div>
                                        <hr>
                                        <div class="float-right">
                                            <a class="btn btn-sm btn-outline-primary" href="#"><i class="icofont-headphone-alt"></i> Escribir</a>
                                            <a class="btn btn-sm btn-primary" href="#"><i class="icofont-refresh"></i> Volver a pedir</a>
                                        </div>
                                        <p class="mb-0 text-black text-primary pt-2"><span class="text-black font-weight-bold"> Pagado:</span> $1500
                                        </p>

                                        <div class="pb-1 pt-1">
                                            <span class="align-middle">Tu evaluación: </span>
                                        <a class="btn btn-sm btn-outline-primary" href="#"><i class="icofont-question"></i> Pendiente</a>
                                        
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                                                <div class="bg-white card mb-4 order-list shadow-sm">
                            <div class="gold-members p-4">
                                <a href="#">
                                </a>
                                <div class="media">
                                    <a href="#">
                                        <img class="mr-4"  style="width: 225px;" src="assets/images/taquiza.jpg">
                                    </a>
                                    <div class="media-body">
                                        <a href="#">
                                            <span class="float-right text-secondary">Pedido el Martes, 21/Oct/2019, 7:18 PM <i class="icofont-check-circled text-success"></i></span>
                                        </a>
                                        <h6 class="mb-2">
                                            <a href="#"></a>
                                            <a href="#" class="text-black">Taquizas <i>el Pimpollo</i></a>
                                        </h6>
                                        <div class="align-items-center d-flex justify-content-between">
                                    <div class="pb-1 pt-1">
                                        <a href="#" class="link-dark text-decoration-none">
                                            
                                            <h6 class="h6 mb-1">Catering &gt; Antojitos &gt; Tradicional &gt; Tacos</h6>
                                            <h3 class="fs-6 h6 mb-1">
                                                <p></p>
                                            </h3>
                                        </a>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" class="me-1 text-primary">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                                    </g>
                                                </svg>
                                            <span class="align-middle fw-light">Pachuquilla, Hidalgo</span>
                                        </div>
                                        
                                    </div>
                                    <div class="align-items-center d-flex justify-content-between">
                                    <div class="pb-1 pt-1">
                                        <span class="me-1 text-primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                                    </g>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em">
                                                    <g>
                                                        <path fill="none" d="M0 0h24v24H0z"/>
                                                        <path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"/>
                                                    </g>
                                                </svg></span>
                                        <span class="align-middle">42 críticas</span>
                                    </div></div>
                                    <a class="btn btn-primary ms-2 p-2 rounded-pill" href="#" aria-label="Add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" class="d-block">
                                                <g>
                                                    <path fill="none" d="M0 0H24V24H0z"/>
                                                    <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/>
                                                </g>
                                            </svg></a>
                                </div>
                                        <hr>
                                        <div class="float-right">
                                            <a class="btn btn-sm btn-outline-primary" href="#"><i class="icofont-headphone-alt"></i> Escribir</a>
                                            <a class="btn btn-sm btn-primary" href="#"><i class="icofont-refresh"></i> Volver a pedir</a>
                                        </div>
                                    
                                        <p class="mb-0 text-black text-primary pt-2"><span class="text-black font-weight-bold"> Pagado:</span> $640
                                        </p>

                                        <div class="pb-1 pt-1">
                                            <span class="align-middle">Tu evaluación: </span>
                                        <a class="btn btn-sm btn-outline-primary" href="#"><i class="icofont-question"></i> Pendiente</a>
                                        
                                    </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>