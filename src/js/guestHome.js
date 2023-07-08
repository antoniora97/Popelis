setTimeout(() => {
    const logo_div = document.getElementById('logo')
    const message_div = document.getElementById('message')
    const register_form_div = document.getElementById('register-form')
    const login_form_div = document.getElementById('login-form')

    const register_message_div = document.getElementById('register-message')
    const login_message_div = document.getElementById('login-message')

    const register_btn = document.getElementById('register-message-btn')
    const login_btn = document.getElementById('login-message-btn')

    // Animación que ocurre al pulsar el botón con id register
    register_btn.addEventListener('click', () => {
        // logo_div.classList.remove('text-white')

        // El div del mensaje se hace más grande y se desplaza a la derecha
        message_div.classList.remove("left-0", "w-[35%]")
        message_div.classList.add("left-[65%]", "w-[55%]")

        // 100ms antes de la mitad de la duración de la animación, 
        // reestablecemos el tamaño del div del mensaje
        setTimeout( () => {
            message_div.classList.remove('w-[55%]')
            message_div.classList.add('w-[35%]')
        }, 400)
        
        // El formulario se desplaza a la izquierda
        register_form_div.classList.remove('left-[35%]')
        register_form_div.classList.add('left-0')

        // Se oculta el mensaje de register
        register_message_div.classList.add('animate-fadeOut')
        
        // Se activa la aparición del mensaje de login con un delay de 500ms
        setTimeout( () => {
            register_message_div.classList.add('hidden')
            login_message_div.classList.remove('hidden')
            login_message_div.classList.add('animate-fadeIn', 'flex', 'flex-col', 'items-center',  'gap-2', 'text-white')
        }, 500)
        
        // Se desactivan las animaciones de aparición y desaparición al finalizar la animación
        setTimeout( () => {
            login_message_div.classList.remove('animate-fadeIn')
            register_message_div.classList.remove('animate-fadeOut', 'flex', 'flex-col', 'items-center',  'gap-2', 'text-white')
        }, 1000);
    })

    // Animación que ocurre al pulsar el botón con id login
    login_btn.addEventListener('click', () => {
        // El div del mensaje se hace más grande y se desplaza a la izquierda
        message_div.classList.remove("left-[65%]", "w-[35%]")
        message_div.classList.add("left-0", "w-[55%]")

        // 100ms antes de la mitad de la duración de la animación, 
        // reestablecemos el tamaño del div del mensaje
        setTimeout( () => {
            message_div.classList.remove('w-[55%]')
            message_div.classList.add('w-[35%]')
        }, 400)

        // El formulario se desplaza a la derecha
        register_form_div.classList.remove('left-0')
        register_form_div.classList.add('left-[35%]')

        // Se oculta el mensaje de login
        login_message_div.classList.add('animate-fadeOut')
        
        // Se activa la aparición del mensaje de register con un delay de 500ms
        setTimeout( () => {
            login_message_div.classList.add('hidden')
            register_message_div.classList.remove('hidden')
            register_message_div.classList.add('animate-fadeIn', 'flex', 'flex-col', 'items-center', 'gap-2', 'text-white', 'animate-fadeIn');
        }, 500)

        // setTimeout( () => {
        //     logo_div.classList.add('text-white')
        // }, 600)

        // Se desactivan las animaciones de aparición y desaparición al finalizar la animación
        setTimeout( () => {
            register_message_div.classList.remove('animate-fadeIn')
            login_message_div.classList.remove('animate-fadeOut', 'flex', 'flex-col', 'items-center',  'gap-2', 'text-white')
        }, 1000)
    })
}, 1);
