document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    
    // Add professional layout style transitions when user begins scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Dynamic Navigation Highlighting during structural page scanning
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});
// Mobile 3-Dots Menu Toggle Logic
// document.addEventListener('DOMContentLoaded', () => {
//     const menuBtn = document.getElementById('mobileMenuBtn');
//     const navMenu = document.getElementById('navMenu');

//     if (menuBtn && navMenu) {
//         menuBtn.addEventListener('click', () => {
//             navMenu.classList.toggle('active');
//         });

//         // Close menu when a link is clicked
//         navMenu.querySelectorAll('a').forEach(link => {
//             link.addEventListener('click', () => {
//                 navMenu.classList.remove('active');
//             });
//         });
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Auto-close menu on link tap
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
// FAQ Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const currentBody = currentItem.querySelector('.accordion-body');
            const isActive = currentItem.classList.contains('active');

            // Close all items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-body').style.maxHeight = null;
            });

            // If it wasn't active, open it
            if (!isActive) {
                currentItem.classList.add('active');
                currentBody.style.maxHeight = currentBody.scrollHeight + "px";
            }
        });
    });

    // Data structure containing specific data for all 6 variants
        const serviceData = {
            colchones: {
                title: "Limpieza de Colchones",
                subtitle: "Eliminación profunda de ácaros, polvo, sudor y bacterias para un descanso verdaderamente saludable.",
                bgImage: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1920&q=80",
                sideImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                description: "Pasamos un tercio de nuestra vida en el colchón. Nuestro sistema de inyección y extracción elimina no solo las manchas visibles superficiales, sino los alérgenos microscópicos.",
                result: "<strong><i class='fa-solid fa-check-double'></i> Resultado:</strong> Un colchón sanitizado, libre de olores y seguro para personas alérgicas.",
                benefits: [
                    { icon: "fa-shield-virus", title: "Eliminación de Ácaros", desc: "Especialmente diseñado para erradicar focos de alergias y asma nocturna." },
                    { icon: "fa-soap", title: "Extracción de Manchas", desc: "Tratamiento eficaz contra aureolas de sudor, fluidos y manchas antiguas." }
                ],
                faqs: [
                    { q: "¿Cuánto tarda en secarse un colchón?", a: "Debido a la potencia de nuestra maquinaria de extracción, el colchón suele quedar listo para usar en un lapso de 3 a 5 horas." },
                    { q: "¿Los químicos son seguros para dormir?", a: "Sí, utilizamos productos biodegradables hipoalergénicos completamente seguros para niños y mascotas." }
                ]
            },
            sofas: {
                title: "Sofás y Muebles Tapizados",
                subtitle: "Recuperamos el color original y la textura de tus muebles eliminando manchas difíciles del uso diario.",
                bgImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1920&q=80",
                sideImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
                description: "Tu sofá es el corazón de tu sala y merece verse impecable. Nuestro proceso integral asegura una restauración profunda de las fibras textiles.",
                result: "<strong><i class='fa-solid fa-check-double'></i> Resultado Garantizado:</strong> Sofás limpios, desinfectados y con un aspecto como nuevo.",
                benefits: [
                    { icon: "fa-wind", title: "Aspirado profundo", desc: "Removemos el polvo superficial y la suciedad suelta antes del lavado." },
                    { icon: "fa-spray-can-sparkles", title: "Fragancia Duradera", desc: "Aporta un aroma fresco y agradable que revitaliza todo el ambiente." }
                ],
                faqs: [
                    { q: "¿Con qué frecuencia se recomienda lavar los muebles?", a: "Recomendamos realizar una limpieza profesional de tus muebles al menos una vez al año." },
                    { q: "¿Qué tipos de muebles pueden ser lavados?", a: "Lavamos prácticamente cualquier tipo de tapizado: microfibra, lino, terciopelo, gamuza y cuero." }
                ]
            },
            sillas: {
                title: "Sillas de Comedor u Oficina",
                subtitle: "Limpieza profunda de estructuras textiles corporativas o de hogar expuestas a constante derrame de líquidos.",
                bgImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=80",
                sideImage: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
                description: "Las sillas acumulan grasa corporal, restos de comida y suciedad de las manos. Limpiamos tanto el área textil como las bases estructurales.",
                result: "<strong><i class='fa-solid fa-check-double'></i> Resultado:</strong> Sillas higienizadas que mejoran drásticamente la imagen corporativa o de tu hogar.",
                benefits: [
                    { icon: "fa-utensils", title: "Remoción de Grasa y Comida", desc: "Limpiadores enzimáticos especializados en degradar restos de comida." },
                    { icon: "fa-briefcase", title: "Ideal para Oficinas", desc: "Trabajamos en horarios flexibles para no interrumpir tu jornada operativa." }
                ],
                faqs: [
                    { q: "¿Hacen precios especiales por volumen?", a: "Sí, ofrecemos tarifas reducidas sustanciales para empresas o comedores residenciales grandes a partir de 6 unidades." },
                    { q: "¿El lavado daña la madera o metal de las patas?", a: "No, protegemos las partes estructurales y secamos minuciosamente cualquier salpicadura." }
                ]
            },
            carro: {
                title: "Asientos y Tapicería de Vehículos",
                subtitle: "Aspirado profundo, extracción de suciedad e higienización del interior textil de tu vehículo.",
                bgImage: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1920&q=80",
                sideImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
                description: "El interior de un coche encierra polvo, calor y humedad. Limpiamos a fondo los asientos de tela para devolverles el confort y el aroma a limpio.",
                result: "<strong><i class='fa-solid fa-check-double'></i> Resultado:</strong> Un habitáculo fresco, libre de olores de comida o tabaco y cómodo para viajar.",
                benefits: [
                    { icon: "fa-car", title: "Limpieza Detallada", desc: "Llegamos a las uniones y pliegues de difícil acceso donde cae la suciedad." },
                    { icon: "fa-smog", title: "Eliminación de Olores", desc: "Efectivo contra rastros persistentes de humedad o encierro." }
                ],
                faqs: [
                    { q: "¿Tengo que llevar el carro a un taller?", a: "No, nuestro equipo asiste a tu casa con los equipos necesarios; solo requerimos acceso a electricidad." },
                    { q: "¿Lavan también el piso y el techo?", a: "Este servicio específico se enfoca en los asientos, pero puedes solicitar un paquete completo para todo el interior." }
                ]
            },
            alfombras: {
                title: "Alfombras y Carpetas",
                subtitle: "Lavado de fibras delicadas removiendo la tierra pisada profunda sin dañar tus tejidos costosos.",
                bgImage: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1920&q=80",
                sideImage: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&w=800&q=80",
                description: "Las alfombras actúan como filtros gigantes de aire reteniendo tierra. Nuestro método extrae el lodo formado en la base del tejido sin comprometer los colores originales.",
                result: "<strong><i class='fa-solid fa-check-double'></i> Resultado:</strong> Fibras esponjosas, colores vivos y una superficie totalmente desinfectada.",
                benefits: [
                    { icon: "fa-water", title: "Extracción Extrema", desc: "Maquinaria de alta presión succiona el agua sucia desde la raíz." },
                    { icon: "fa-wand-magic-sparkles", title: "Cuidado del Color", desc: "Productos especiales que previenen la decoloración y cuidan el textil." }
                ],
                faqs: [
                    { q: "¿Las alfombras se lavan en el lugar?", a: "Sí, realizamos el lavado directamente sobre superficies aptas o terrazas en tu domicilio." },
                    { q: "¿Eliminan manchas de vino o café?", a: "Tratamos manchas difíciles con removedores especiales logrando atenuarlas o borrarlas por completo en la mayoría de los casos." }
                ]
            },
            billar: {
                title: "Mesas de Billar",
                subtitle: "Mantenimiento y cepillado especializado del paño sintético o lana para garantizar la precisión del juego.",
                bgImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=80",
                sideImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
                description: "El paño de billar requiere un trato extremadamente delicado. Removemos manchas de tiza, polvo y sudor corporal sin alterar la tensión ni dañar el recorrido de las bolas.",
                result: "<strong><i class='fa-solid fa-check-double'></i> Resultado:</strong> Un paño impecable, suave y nivelado para una experiencia de juego perfecta.",
                benefits: [
                    { icon: "fa-bullseye", title: "Precisión de Juego", desc: "Eliminamos partículas abrasivas que desvían o frenan las bolas de billar." },
                    { icon: "fa-feather", title: "Tratamiento No Invasivo", desc: "Succión controlada y cepillado técnico de protección de la lana." }
                ],
                faqs: [
                    { q: "¿Se puede encoger el paño al lavarlo?", a: "No, implementamos técnicas de humedad controlada y secado rápido específico para evitar cualquier deformación." },
                    { q: "¿Limpian las bandas laterales?", a: "Sí, el servicio cubre todo el paño horizontal y el revestimiento textil de las bandas internas." }
                ]
            }
        };

        // Router script logic to grab URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const selectedService = urlParams.get('service') || 'sofas'; // Default fallback variant

        const data = serviceData[selectedService];

        if (data) {
            // Document structure text assignment
            document.title = `${data.title} | Clean Muebleria`;
            document.getElementById('service-hero').style.backgroundImage = `url('${data.bgImage}')`;
            document.getElementById('faq-side-image').src = data.sideImage;
            document.getElementById('service-title').innerText = data.title;
            document.getElementById('service-subtitle').innerText = data.subtitle;
            document.getElementById('service-description').innerText = data.description;
            document.getElementById('service-result').innerHTML = data.result;

            // Generate layout structure for key benefits
            const benefitsContainer = document.getElementById('benefits-container');
            benefitsContainer.innerHTML = data.benefits.map(b => `
                <div class="benefit-item">
                    <i class="fa-solid ${b.icon}"></i>
                    <div>
                        <h4>${b.title}</h4>
                        <p>${b.desc}</p>
                    </div>
                </div>
            `).join('');

            // Generate clean structural code for FAQs
            const faqContainer = document.getElementById('faq-container');
            faqContainer.innerHTML = data.faqs.map((f, index) => `
                <div class="accordion-item ${index === 0 ? 'active' : ''}">
                    <div class="accordion-header">
                        <h4>${f.q}</h4>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div class="accordion-body" style="${index === 0 ? 'max-height: 200px;' : ''}">
                        <p>${f.a}</p>
                    </div>
                </div>
            `).join('');
        }

        // Accordion slide action control script
        document.addEventListener('DOMContentLoaded', () => {
            const accordionHeaders = document.querySelectorAll('.accordion-header');
            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const currentItem = header.parentElement;
                    const currentBody = currentItem.querySelector('.accordion-body');
                    const isActive = currentItem.classList.contains('active');

                    document.querySelectorAll('.accordion-item').forEach(item => {
                        item.classList.remove('active');
                        item.querySelector('.accordion-body').style.maxHeight = null;
                    });

                    if (!isActive) {
                        currentItem.classList.add('active');
                        currentBody.style.maxHeight = currentBody.scrollHeight + "px";
                    }
                });
            });
        });