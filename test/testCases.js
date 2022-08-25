
 const ouput =[
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba.md'
  },
  {
    href: 'https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba.md'
  },
  {
    href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba.md'
  }
]
 
  const ouputValidateTrue = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba.md',
      status: 200,
      Text: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba.md',
      status: 200,
      Text: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',    
      text: 'Markdown',
      path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba.md',
      status: 404,
      Text: 'FAIL'
    },
    {
      href: 'https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727',
      text: 'Markdown',
      path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba.md',
      status: 503,
      Text: 'FAIL'
    },
    {
      href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
      text: 'Markdown',
      path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba.md',
      status: 'ERROR',
      Text: 'FAIL'
    }
  ];

  module.exports = {
    ouput,
    ouputValidateTrue,
  };