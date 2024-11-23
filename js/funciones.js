const inst = Vue.createApp({
    data() {
        return {
            personas: [] // Almacenará los datos de los personajes
        };
    },
    methods: {
        cargarPersonas() {
            // Llamada a la API de Dragon Ball
            axios.get("https://dragonball-api.com/api/characters")
                .then(respuesta => {
                    this.personas = respuesta.data.items.map(personaje => ({
                        id: personaje.id,
                        name: personaje.name,
                        race: personaje.race || 'Desconocido',
                        gender: personaje.gender || 'Desconocido',
                        ki: personaje.ki || 'Desconocido',
                        affiliation: personaje.affiliation || 'Desconocido',
                        description: personaje.description || 'Desconocido',
                        image: personaje.image || 'https://via.placeholder.com/300x300?text=Sin+Imagen',
                        showDescription: false // Inicialmente oculta
                    }));
                })
                .catch(error => {
                    console.error("Error al cargar personajes:", error);
                });
        }
    },
    created() {
        this.cargarPersonas(); // Carga los personajes al iniciar
    }
});

const app = inst.mount("#contenedor");
