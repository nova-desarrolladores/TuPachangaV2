<template>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="SRSES - Planifica tu fiesta, que trabajen otros - BÚSQUEDA AVANZADA -">
    <meta name="author" content="">
    <title>Tu pachanga - Planifica tu fiesta, que trabajen otros - BÚSQUEDA AVANZADA -</title>
    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="assets/css/blocks.css">
    <!-- Custom styles for this template -->
    <link href="style.css" rel="stylesheet">
</head>

<body class="text-black-50">
    
    <main>
        <section class="bg-dark">
            <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBRfUqO-g0YURpNqeJJputHs&key=AIzaSyA9ktNFtt93r-ZiLe0bQAxifySuo8eu2gE" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%" class="d-block" title="UNIDEH"></iframe>
        </section>
        <section class="pb-5 pt-5">
            <div class="container pb-2 pt-2">
                <div class="gx-lg-5 gy-4 row">
                    <div class="col-lg-5 col-xl-4 order-lg-1">
                        <div class="bg-light p-4 position-sticky top-0">
                            <h2 class="h5 text-dark">Filtros de búsqueda</h2>
                            <hr/>
                            <form>
                                <div class="input-group mb-3">
                                    <input type="text" class="border-end-0 form-control p-3" placeholder="¿Qué buscas?" aria-label="Enter Keyword" aria-describedby="keyword-input">
                                    <span class="bg-white input-group-text pe-3 ps-3" id="keyword-input"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
                                                <g>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                                                </g>
                                            </svg></span>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" class="border-end-0 form-control p-3" placeholder="Donde" aria-label="Enter Location" aria-describedby="location-input">
                                    <span class="bg-white input-group-text pe-3 ps-3" id="location-input"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                <path d="M12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                                            </svg></span>
                                </div>
                                <div class="mb-3">
                                    <select class="form-select p-3" id="searchCategory" required>
                                            <option selected disabled value="">Categoría</option>
                                            <option>Opción 1</option>
                                            <option>Opción 2</option>
                                            <option>Opción 3</option>
                                            <option>Opción 4</option>
                                            <option>Opción 5</option>
                                        </select>
                                </div>
                                <div class="mb-3">
                                    <label for="customRange1" class="form-label text-secondary">Radio</label>
                                    <input type="range" class="form-range" id="customRange1">
                                </div>
                                <label class="form-label mb-3 text-secondary">Filtrar por palabras clave</label>
                                <div class="gy-2 mb-3 row row-cols-sm-2">
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                                            <label class="form-check-label" for="exampleCheck1">Tacos</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck2" required/>
                                            <label class="form-check-label" for="exampleCheck2">Free Wi-Fi</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck3" required/>
                                            <label class="form-check-label" for="exampleCheck3">Bodas</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck4" required/>
                                            <label class="form-check-label" for="exampleCheck4">Fitness Center</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck5" required/>
                                            <label class="form-check-label" for="exampleCheck5">Meseros</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck6" required/>
                                            <label class="form-check-label" for="exampleCheck6">Hot Dogs</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck7" required/>
                                            <label class="form-check-label" for="exampleCheck7">Flores</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck8" required/>
                                            <label class="form-check-label" for="exampleCheck8">Jardín</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck9" required/>
                                            <label class="form-check-label" for="exampleCheck9">Pet Allowed</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck10" required/>
                                            <label class="form-check-label" for="exampleCheck10">Outdoor Pool</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck11" required/>
                                            <label class="form-check-label" for="exampleCheck11">Free Parking</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck12" required/>
                                            <label class="form-check-label" for="exampleCheck12">Bar/Lounge</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck13" required/>
                                            <label class="form-check-label" for="exampleCheck13">Terrace/Patio</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck14" required/>
                                            <label class="form-check-label" for="exampleCheck14">Restaurant</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <button type="submit" class="btn btn-primary pe-4 ps-4 rounded-pill">
                                            <span>Filtrar</span>
                                        </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-7 col-xl-8 order-lg-0">
                        <div class="align-items-center g-2 mb-3 row">
                            <div class="col">
                                <h1 class="fs-6 h5 mb-0 text-dark">Resultados para: <span class="fw-normal small text-secondary">texto de búsqueda</span></h1>
                            </div>
                            <div class="col-sm-auto">
                                <select class="form-select" id="sortingOption" required>
                                        <option selected disabled value="">Ordenar por</option>
                                        <option>Cercanía</option>
                                        <option>Nombre</option>
                                        <option>Precio: Alto a bajo</option>
                                        <option>Precio:</option>
                                        <option>Random</option>
                                    </select>
                            </div>
                        </div>
                        <div class="justify-content-center row row-cols-md-2">
                            <div class="pb-3 pt-3">
                                <div class="border">
                                    <a href="#" class="d-block"><img src="assets/images/shutterstock_245726512-scaled-940x940.jpg" class="img-fluid w-100" alt="Location image" width="350" height="240"></a>
                                    <div class="pb-3 ps-4 pe-4 pt-4">
                                        <div class="align-items-center d-flex justify-content-between">
                                            <div class="pb-1 pt-1">
                                                <a href="#" class="link-dark text-decoration-none">
                                                    <h2 class="h5 mb-1">Rizotes el Payasón</h2>
                                                </a>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" class="me-1 text-primary">
                                                            <g>
                                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                                <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                                            </g>
                                                        </svg>
                                                    <span class="align-middle">Pachuca y alrededores</span>
                                                </div>
                                            </div>
                                            <a class="btn btn-primary ms-2 p-2 rounded-pill" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" class="d-block">
                                                        <g>
                                                            <path fill="none" d="M0 0H24V24H0z"/>
                                                            <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/>
                                                        </g>
                                                    </svg></a>
                                        </div>
                                        <hr/>
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
                                            </div>
                                            <span class="fw-bold pb-1 pt-1"><span>$</span><span>$</span><span>$</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-3 pt-3">
                                <div class="border">
                                    <a href="#" class="d-block"><img src="assets/images/taquiza.jpg" class="img-fluid w-100" alt="Location image" width="350" height="240"></a>
                                    <div class="pb-3 ps-4 pe-4 pt-4">
                                        <div class="align-items-center d-flex justify-content-between">
                                            <div class="pb-1 pt-1">
                                                <a href="#" class="link-dark text-decoration-none">
                                                    <h2 class="h5 mb-1">Taquizas el Pimpollo</h2>
                                                </a>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" class="me-1 text-primary">
                                                            <g>
                                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                                <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                                            </g>
                                                        </svg>
                                                    <span class="align-middle">Pachuca y alrededores</span>
                                                </div>
                                            </div>
                                            <a class="btn btn-primary ms-2 p-2 rounded-pill" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" class="d-block">
                                                        <g>
                                                            <path fill="none" d="M0 0H24V24H0z"/>
                                                            <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/>
                                                        </g>
                                                    </svg></a>
                                        </div>
                                        <hr/>
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
                                                <span class="align-middle">32 críticas</span>
                                            </div>
                                            <span class="fw-bold pb-1 pt-1"><span>$</span><span>$</span><span class="opacity-50">$</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-3 pt-3">
                                <div class="border">
                                    <a href="#" class="d-block"><img src="assets/images/tacos-canasta-chicharron.jpg" class="centro-chica h-auto img-fluid mh-100 w-100" alt="Location image" width="350" height="240"></a>
                                    <div class="pb-3 ps-4 pe-4 pt-4">
                                        <div class="align-items-center d-flex justify-content-between">
                                            <div class="pb-1 pt-1">
                                                <a href="#" class="link-dark text-decoration-none">
                                                    <h2 class="h5 mb-1">Tacos de canasta El Chicharrón</h2>
                                                </a>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" class="me-1 text-primary">
                                                            <g>
                                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                                <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                                            </g>
                                                        </svg>
                                                    <span class="align-middle">Pachuquilla, Hidalgo</span>
                                                </div>
                                            </div>
                                            <a class="btn btn-primary ms-2 p-2 rounded-pill" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" class="d-block">
                                                        <g>
                                                            <path fill="none" d="M0 0H24V24H0z"/>
                                                            <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/>
                                                        </g>
                                                    </svg></a>
                                        </div>
                                        <hr/>
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
                                                <span class="align-middle">432 reviews</span>
                                            </div>
                                            <span class="fw-bold pb-1 pt-1"><span>$</span><span class="opacity-50">$</span><span class="opacity-50">$</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-3 pt-3">
                                <div class="border">
                                    <a href="#" class="d-block"><img src="assets/images/12181304-full-length-portrait-of-a-magician-holding-a-magic-wand-and-top-hat-isolated-on-white-background.jpg" class="centro-grande-cortada img-fluid w-100" alt="Location image" width="350" height="240"></a>
                                    <div class="pb-3 ps-4 pe-4 pt-4">
                                        <div class="align-items-center d-flex justify-content-between">
                                            <div class="pb-1 pt-1">
                                                <a href="#" class="link-dark text-decoration-none">
                                                    <h2 class="h5 mb-1">Mago T</h2>
                                                </a>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" class="me-1 text-primary">
                                                            <g>
                                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                                <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                                            </g>
                                                        </svg>
                                                    <span class="align-middle">Huejutla de Reyes y alrededores</span>
                                                </div>
                                            </div>
                                            <a class="btn btn-primary ms-2 p-2 rounded-pill" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" class="d-block">
                                                        <g>
                                                            <path fill="none" d="M0 0H24V24H0z"/>
                                                            <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/>
                                                        </g>
                                                    </svg></a>
                                        </div>
                                        <hr/>
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
                                                <span class="align-middle">432 reviews</span>
                                            </div>
                                            <span class="fw-bold pb-1 pt-1"><span>$</span><span>$</span><span>$</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-3 pt-3">
                                <div class="border">
                                    <a href="#" class="d-block"><img src="assets/images/ezo-banda-vertical-los-angeles-estados-unidos-banda-de-heavy-metal-japonesa-eredbc.jpg" class="centro-grande-cortada img-fluid mw-100 overflow-hidden w-100" alt="Location image" width="350" height="240"></a>
                                    <div class="pb-3 ps-4 pe-4 pt-4">
                                        <div class="align-items-center d-flex justify-content-between">
                                            <div class="pb-1 pt-1">
                                                <a href="#" class="link-dark text-decoration-none">
                                                    <h2 class="h5 mb-1">Banda El bandón</h2>
                                                </a>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" class="me-1 text-primary">
                                                            <g>
                                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                                <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                                            </g>
                                                        </svg>
                                                    <span class="align-middle">Tizayuca y Edo. México</span>
                                                </div>
                                            </div>
                                            <a class="btn btn-primary ms-2 p-2 rounded-pill" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" class="d-block">
                                                        <g>
                                                            <path fill="none" d="M0 0H24V24H0z"/>
                                                            <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/>
                                                        </g>
                                                    </svg></a>
                                        </div>
                                        <hr/>
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
                                                <span class="align-middle">432 reviews</span>
                                            </div>
                                            <span class="fw-bold pb-1 pt-1"><span>$</span><span>$</span><span class="opacity-50">$</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-3 pt-3">
                                <div class="border">
                                    <a href="#" class="d-block"><img src="assets/images/hatspics2.png" class="centro-grande-cortada img-fluid mw-100 overflow-hidden w-100" alt="Location image" width="350" height="240"></a>
                                    <div class="pb-3 ps-4 pe-4 pt-4">
                                        <div class="align-items-center d-flex justify-content-between">
                                            <div class="pb-1 pt-1">
                                                <a href="#" class="link-dark text-decoration-none">
                                                    <h2 class="h5 mb-1">Party Hats</h2>
                                                </a>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.125em" height="1.125em" class="me-1 text-primary">
                                                            <g>
                                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                                <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                                            </g>
                                                        </svg>
                                                    <span class="align-middle">Pachuca, Mineral de la Reforma, Ciudad Sahagún</span>
                                                </div>
                                            </div>
                                            <a class="btn btn-primary ms-2 p-2 rounded-pill" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" class="d-block">
                                                        <g>
                                                            <path fill="none" d="M0 0H24V24H0z"/>
                                                            <path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/>
                                                        </g>
                                                    </svg></a>
                                        </div>
                                        <hr/>
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
                                                <span class="align-middle">432 reviews</span>
                                            </div>
                                            <span class="fw-bold pb-1 pt-1"><span>$</span><span>$</span><span class="opacity-50">$</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pb-3 pt-3 text-center">
                            <a class="align-items-center btn btn-primary d-inline-flex pe-3 ps-3 rounded-pill" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.25em" height="1.25em" class="me-2">
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"/>
                                    </svg><span>Más</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-primary py-4 text-white" data-pgc="directory.cta" data-pgc-field="CTA_Classes">
            <div class="container py-3">
                <div class="align-items-center row">
                    <div class="col-lg-7">
                        <h2 class="mb-3">Únete</h2>
                        <p class="fw-light"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div class="col-lg-auto ms-auto">
                        <a class="btn btn-outline-light ps-4 pe-4 rounded-pill" href="#" target="_pg_blank">Registrarse</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
</body>

</html>
</template>