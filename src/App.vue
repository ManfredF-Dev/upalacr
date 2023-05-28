<template>
    <header class="p-3.5">

        <!-- TITULO -->
        <div class="relative overflow-hidden bg-cover bg-no-repeat" style="
        background-position: 50%;
        background-image: url('https://cdn.sancarlosdigital.com/wp-content/uploads/2018/10/foto-upala.jpg');
        height: 300px;">

            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.75)">
                <div class="flex h-full items-center justify-center">
                    <div id="titulo" class="px-6 text-center text-white md:px-12">

                        <h1 class="entry-title">
                            <div class="logo-container">
                                <img src="https://cdn-icons-png.flaticon.com/128/1147/1147560.png"
                                    class="h-8 m-3 logo-image" alt="Logo" />
                                CONOCEUPALACR
                                <img src="https://cdn-icons-png.flaticon.com/128/770/770633.png" class="h-8 m-3 logo-image"
                                    alt="Logo" />
                            </div>
                        </h1>


                        <h3 class="mb-8 text-2xl font-sans">¡Upala cautivante de arriba a bajo!</h3>
                        <a href="#Inicio"
                            class="inline-block rounded border-2 border-neutral-50 px-7 pb-[8px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init data-te-ripple-color="light">
                            Comenzar
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="Info" id="descripcion">
            <p class="p-3.5 text-lg font-medium max-w-lg text-2xl font-semibold leading-loose text-justify  text-teal-600">
                Nuestro objetivo es fomentar el turismo local y resaltar los tesoros ocultos de nuestro pueblo. 
                Creemos firmemente que al mostrar la belleza de nuestros lugares y proporcionar guias sobre cómo llegar, 
                podemos inspirar a los visitantes a explorar y apreciar todo lo que tenemos para ofrecer.</p>
        </div>
    </header>



    <!-- CONTENIDO -->
    <div class="d-sm-flex align-self-sm-stretch container mx-auto p-3.5" id="Inicio">
        <!-- ... -->
        <!-- CARTAS DE INFORMACION -->
        <!-- CARGA -->
        <div v-if="loading" class="loading-animation"></div>

        <!-- Tu código existente -->
        <div v-for="place in displayedPlaces" :key="place.id" class="row">
            <div class="d-sm-flex align-self-sm-stretch col-sm-6 col-md-6 col-lg-4">

                <div id="cartas"
                    class="card m-2 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-stone-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init
                        data-te-ripple-color="light">


                        <img class="rounded-t-lg card-img-top object-fit" :src="place.url" alt="" />
                        <a href="#!">
                            <div
                                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>
                    <div class="p-6">
                        <h5 id="Informacion"
                            class="card-body text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {{ place.nombre }}
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-100">
                            {{ place.descripcion }}
                        </p>

                        <a :href="place.direccion"
                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init data-te-ripple-color="light">
                            ¿Como llegar?
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- FIN -->


    </div>

    <!-- Paginacion -->
    <nav aria-label="Page navigation example">
        <ul class="flex justify-center -space-x-px">
            <li>
                <a href="#" @click="setCurrentPage(currentPage - 1)"
                    :class="{ 'pointer-events-none opacity-50': currentPage === 1 }" class="block px-3 py-2 leading-tight text-gray-500 bg-white 
                    hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700">
                    <span class="sr-only">Previous</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>


            <li v-for="page in pages" :key="page">
                <a href="#" @click="setCurrentPage(page)"
                    :class="{ 'z-10': currentPage === page, 'text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700': currentPage !== page }"
                    class="px-3 py-2 leading-tight bg-white">
                    {{ page }}
                </a>
            </li>
            <li>
                <a href="#" @click="setCurrentPage(currentPage + 1)"
                    :class="{ 'pointer-events-none opacity-50': currentPage === pages }" class="block px-3 py-2 leading-tight text-gray-500 bg-white 
                    hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700">

                    <span class="sr-only ">Next</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
        </ul>
    </nav>









    <!--Footer container-->
    <footer class=" text-center text-white justify-center">
        <div class="container pt-9">
            <div class="mb-9 flex justify-center">

                <a href="#!" class="mr-9 text-blue-500 dark:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </a>

                <a href="#!" class="mr-9 text-blue-500 dark:text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                </a>
                <a href="#!" class="mr-9 text-red-500 dark:text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                            fill-rule="evenodd" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="#!" class="mr-9 text-orange-500 dark:text-orange-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
                <a href="#!" class="mr-9 text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
            </div>
        </div>
        <!--Copyright section-->
        <div class="text-slate-950 p-4 text-center ">
            © 2023 Copyright:
            <a class="text-slate-950" href="www.linkedin.com/in/
manfred-flores-cerdas-365881269">Upala, Alajuela, Costa Rica</a>
        </div>
    </footer>
</template>


<script>
import api from './service/api';

export default {
    data() {
        return {
            loading: true,
            places: [],
            currentPage: 1,
            itemsPerPage: 3,
            isSearchOpen: false,
            searchQuery: ''
        };
    },
    computed: {
        displayedPlaces() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.places.slice(startIndex, endIndex);
        },
        pages() {
            return Math.ceil(this.places.length / this.itemsPerPage);
        }
    },
    mounted() {
        api.getPlaces().then(response => {
            this.places = response.data;
            this.shufflePlaces();
            this.loading = false;
        });
    },
    methods: {
        shufflePlaces() {
            for (let i = this.places.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.places[i], this.places[j]] = [this.places[j], this.places[i]];
            }
        },
        setCurrentPage(page) {
            this.currentPage = page;
        },
        toggleSearch() {
            this.isSearchOpen = !this.isSearchOpen;
            if (!this.isSearchOpen) {
                this.searchQuery = '';
            }
        }
    }
};
</script>




