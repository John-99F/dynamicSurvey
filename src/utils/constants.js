const typesQuestions = {
    1: 'Opción Múltiple',
    2: 'Seleccion Múltiple',
    3: 'Respuesta abierta'
}

let questions = [
    {   
        type: 1,
        question: '¿Qué tan satisfecho estás con nuestro servicio general?',
        options: [
          'Muy satisfecho',
          'Satisfecho',
          'Neutral',
          'Insatisfecho',
          'Muy insatisfecho'
        ]
      }, 
      {
        type: 1,
        question: '¿Con qué frecuencia utilizas nuestros servicios?',
        options: [
          'Diariamente',
          'Semanalmente',
          'Mensualmente',
          'Rara vez'
        ]
      },
      {
        type: 2,
        question: '¿Qué aspectos te parecen más útiles de nuestro servicio?',
        options: [
          'Facilidad de uso',
          'Velocidad de respuesta',
          'Atención al cliente',
          'Variedad de funciones',
          'Precio'
        ]
      },
      {
        type: 2,
        question: '¿Dónde sueles interactuar con nosotros?',
        options: [
          'Sitio web',
          'Aplicación móvil',
          'Redes sociales',
          'Correo electrónico',
          'Teléfono'
        ]
      },
      {
        type: 3,
        question: '¿Qué mejorarías de nuestro servicio?'
      },
      {
        type: 3,
        question: '¿Qué fue lo que más te gustó de tu experiencia reciente?'
      },
      {
        type: 1,
        question: '¿Qué tan fácil fue navegar por nuestra plataforma?',
        options: [
          'Muy fácil',
          'Fácil',
          'Neutral',
          'Difícil',
          'Muy difícil'
        ]
      },
      {
        type: 1,
        question: '¿Recomendarías nuestro servicio a otras personas?',
        options: [
          'Definitivamente sí',
          'Probablemente sí',
          'No estoy seguro',
          'Probablemente no',
          'Definitivamente no'
        ]
      },
      {
        type: 2,
        question: '¿Qué canales prefieres para recibir actualizaciones o promociones?',
        options: [
          'Correo electrónico',
          'Notificaciones en la app',
          'SMS',
          'Redes sociales',
          'No deseo recibir información'
        ]
      },
      {
        type: 1,
        question: '¿Tu problema fue resuelto en tu última interacción con nosotros?',
        options: [
          'Sí, completamente',
          'Parcialmente',
          'No, aún está pendiente'
        ]
      }  
]

