
 const ouput =[
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\prueba.md'
  },
  {
    href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\prueba.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba1.md'
  },
  {
    href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba1.md'
  }
];
 
  const ouputValidateTrue = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\prueba.md',
      status: 200,
      Text: 'OK'
    },
    {
      href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
      text: 'Markdown',
      path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\prueba.md',
      status: 'ERROR',
      Text: 'FAIL'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba1.md',
      status: 200,
      Text: 'OK'
    },
    {
      href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
      text: 'Markdown',
      path: 'D:\\LABORATORIA\\LIM018-md-links\\pruebas\\pruebas1\\prueba1.md',
      status: 'ERROR',
      Text: 'FAIL'
    }
  ];


  module.exports = {
    ouput,
    ouputValidateTrue,
  };