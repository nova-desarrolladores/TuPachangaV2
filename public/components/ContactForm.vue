<template>
            <section class="bg-light pb-5 pt-5">
            <div class="container pb-4 pt-4">
                <div class="row">
                    <div class="col-xl-9 me-auto ms-auto">
                        <h2 class="text-center text-dark">¿Cuestiones? ¿Dudas? ¿Un saludo?</h2>
                        <p class="fw-light mb-4 text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <form>
                            <div class="gx-3 row">
                                <div class="col-md-6 mb-3">
                                    <input id="inputName" type="text" class="form-control p-3" placeholder="Nombre" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input id="inputEmail" type="email" class="form-control p-3" placeholder="Email" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <input id="inputSubject" type="text" class="form-control p-3" placeholder="Asunto" required>
                            </div>
                            <div class="mb-3">
                                <textarea id="inputTextarea" class="form-control p-3" rows="6" placeholder="Mensaje" required></textarea>
                            </div>
                            <div class="form-check mb-4">
                                <input id="exampleCheck1" type="checkbox" class="form-check-input" />
                                <label class="form-check-label" for="exampleCheck1">Me gustaría recibir ofertas, novedades y actualizaciones.</label>
                            </div>
                            <div class="text-end">
                                <button type="submit" class="btn btn-primary pe-4 ps-4 rounded-pill">
                                        <span>Enviar</span>
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
</template>