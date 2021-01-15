(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/custom-theme.md?vue&type=template&id=3962bf8a

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"tema-personalizado\"><a class=\"header-anchor\" href=\"#tema-personalizado\">¶</a> Tema personalizado</h2><p>Element Plus utiliza la metodología BEM en CSS con la finalidad de que puedas sobrescribir los estilos fácilmente. Pero, si necesita remplazar estilos a gran escala, por ejemplo, cambiar el color del tema de azul a naranja o verde, quizás reemplazarlos uno a uno no sea lo más adecuado, para ello hay 4 maneras de modificar los estilos.</p><h3 id=\"cambiando-el-color-del-tema\"><a class=\"header-anchor\" href=\"#cambiando-el-color-del-tema\">¶</a> Cambiando el color del tema</h3><p>Si lo que se busca es cambiar el color del tema de Element, se recomienda utilizar el <a href=\"https://elementui.github.io/theme-chalk-preview/#/en-US\">sitio de visualización de temas</a>. Element Plus utiliza un color azul brillante y amigable como tema principal. Al cambiarlo, puede hacer que Element Plus este más conectado visualmente a proyectos específicos.</p><p>Este sitio, le permitirá obtener una vista previa del tema con un nuevo color en tiempo real, y, además, obtener un paquete de estilos completo basado en el nuevo color para su descarga (para importar estos nuevos estilos, consulte la sección ‘Importar un tema personalizado’ o ‘Importar un tema de componente bajo demanda&#39; que se encuentran dentro de esta sección).</p><h3 id=\"actualizando-variables-scss-en-tu-proyecto\"><a class=\"header-anchor\" href=\"#actualizando-variables-scss-en-tu-proyecto\">¶</a> Actualizando variables SCSS en tu proyecto</h3><p><code>theme-chalk</code> esta escrito en SCSS. Si su proyecto también utiliza SCSS, puede cambiar las variables de estilos de Element. Para ello, solo necesita crear un nuevo archivo de estilos, por ejemplo, <code>element-variables.scss</code>:</p><pre><code class=\"hljs language-html\">/* Color del tema */\n$--color-primary: teal;\n\n/* Ubicación de la fuente, obligatoria */\n$--font-path: &#39;~element-plus/lib/theme-chalk/fonts&#39;;\n\n@import &quot;~element-plus/packages/theme-chalk/src/index&quot;;\n</code></pre><p>Entonces, en el archivo principal del proyecto, importe este archivo de estilos en lugar de los estilos de Element:</p><pre><code class=\"hljs language-JS\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;./element-variables.scss&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\n</code></pre><div class=\"tip\"><p>Nota es necesario sobrescribir la ruta de la fuente por una ruta relativa de las fuentes de Element.</p></div><h3 id=\"cli-para-generar-temas\"><a class=\"header-anchor\" href=\"#cli-para-generar-temas\">¶</a> CLI para generar temas</h3><p>Si su proyecto no utiliza SCSS, puede personalizar el tema a través de esta herramienta:</p><h4 id=\"instalacion\"><a class=\"header-anchor\" href=\"#instalacion\">¶</a> <strong>Instalación</strong></h4><p>Primero, debe instalar el generador de temas ya sea de forma global o local. Se recomienda instalarlo de forma local, ya que de esta manera, cuando otros clonen su proyecto, npm automáticamente los instalará para ellos.</p><pre><code class=\"hljs language-shell\">npm i element-theme -g\n</code></pre><p>Ahora, instale el tema <code>chalk</code> desde npm o Github.</p><pre><code class=\"hljs language-shell\"><span class=\"hljs-meta\">#</span><span class=\"bash\"> desde npm</span>\nnpm i element-theme-chalk -D\n<span class=\"hljs-meta\">\n#</span><span class=\"bash\"> desde GitHub</span>\nnpm i https://github.com/ElementUI/theme-chalk -D\n</code></pre><h4 id=\"inicializar-archivo-de-variables\"><a class=\"header-anchor\" href=\"#inicializar-archivo-de-variables\">¶</a> <strong>Inicializar archivo de variables</strong></h4><p>Después de haber instalado correctamente los paquetes, el comando <code>et</code> estará disponible en su CLI (si instalo el paquete de manera local, utilice <code>node_modules/.bin/et</code> en su lugar). Ejecute <code>-i</code> para inicializar un archivo de variables, puede especificar un nombre distinto, pero por defecto, el archivo se llama <code>element-variables.scss</code>. También puede especificar un directorio distinto.</p><pre><code class=\"hljs language-shell\">et -i [custom output file]\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ Generator variables file</span>\n</code></pre><p>En el archivo <code>element-variables.scss</code> podrá encontrar todas las variables que utiliza Element Plus para definir los estilos y estos están definidos en SCSS. Aquí un ejemplo:</p><pre><code class=\"hljs language-css\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-id\">#409EFF</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-primary-light-1</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 10%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 53a8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-2</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 20%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 66b1ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-3</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 30%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 79bbff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-4</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 40%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 8cc5ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-5</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 50%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* a0cfff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-6</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 60%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* b3d8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-7</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 70%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* c6e2ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-8</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 80%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* d9ecff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-9</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 90%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* ecf5ff */</span>\n\n$<span class=\"hljs-selector-tag\">--color-success</span>: <span class=\"hljs-selector-id\">#67c23a</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-warning</span>: <span class=\"hljs-selector-id\">#e6a23c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-danger</span>: <span class=\"hljs-selector-id\">#f56c6c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-info</span>: <span class=\"hljs-selector-id\">#909399</span> !<span class=\"hljs-selector-tag\">default</span>;\n\n...\n</code></pre><h4 id=\"modificando-variables\"><a class=\"header-anchor\" href=\"#modificando-variables\">¶</a> <strong>Modificando variables</strong></h4><p>Solo debe modificar el archivo <code>element-variables.scss</code>, por ejemplo, para cambiar el color del tema a rojo:</p><pre><code class=\"hljs language-CSS\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-tag\">red</span>;\n</code></pre><h4 id=\"construyendo-el-tema\"><a class=\"header-anchor\" href=\"#construyendo-el-tema\">¶</a> <strong>Construyendo el tema</strong></h4><p>Después de haber modificado el archivo de variables, utilizaremos el comando <code>et</code> para construir nuestro tema. Puedes activar el modo <code>watch</code> agregando el parámetro <code>-w</code>. Y, si desea personalizar el nombre del archivo, debes agregar el parámetro <code>-c</code> seguido del nombre. Por defecto, el archivo de tema construido es colocado dentro de <code>./theme</code>. Puede especificar un directorio distinto utilizando el parámetro <code>-o</code>.</p><pre><code class=\"hljs language-shell\">et\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ build theme font</span>\n<span class=\"hljs-meta\">&gt;</span><span class=\"bash\"> ✔ build element theme</span>\n</code></pre><h3 id=\"use-custom-theme\"><a class=\"header-anchor\" href=\"#use-custom-theme\">¶</a> Use custom theme</h3><h4 id=\"importar-un-tema-personalizado\"><a class=\"header-anchor\" href=\"#importar-un-tema-personalizado\">¶</a> <strong>Importar un tema personalizado</strong></h4><p>Importing your own theme is just like importing the default theme, only this time you import the file built from &quot;Online Theme Roller&quot; or &quot;CLI tool&quot;:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;../theme/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\ncreateApp(App).use(ElementPlus)\n</code></pre><h4 id=\"importar-un-tema-de-componente-bajo-demanda\"><a class=\"header-anchor\" href=\"#importar-un-tema-de-componente-bajo-demanda\">¶</a> <strong>Importar un tema de componente bajo demanda</strong></h4><p>Si esta utilizando <code>babel-plugin-component</code> para importar bajo demanda, solo debe modificar el archivo <code>.babelrc</code> y especificar en la propiedad <code>styleLibraryName</code> la ruta en donde se encuentra localizado su tema personalizado relativo a <code>.babelrc</code>. <strong>Nota</strong> el carácter <code>~</code> es obligatorio:</p><pre><code class=\"hljs language-json\">{\n  <span class=\"hljs-attr\">&quot;plugins&quot;</span>: [\n    [\n      <span class=\"hljs-string\">&quot;component&quot;</span>,\n      {\n        <span class=\"hljs-attr\">&quot;libraryName&quot;</span>: <span class=\"hljs-string\">&quot;element-plus&quot;</span>,\n        <span class=\"hljs-attr\">&quot;styleLibraryName&quot;</span>: <span class=\"hljs-string\">&quot;~theme&quot;</span>\n      }\n    ]\n  ]\n}\n</code></pre><p>Si no esta familiarizado con <code>babel-plugin-component</code>, por favor diríjase a la documentación sobre <a href=\"./#/en-US/component/quickstart\">Como Iniciar</a>. Para más detalles, consulte el <a href=\"https://github.com/ElementUI/element-theme\">repositorio del proyecto</a> de <code>element-theme</code>.</p>", 37);

function render(_ctx, _cache) {
  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2]);
}
// CONCATENATED MODULE: ./website/docs/es/custom-theme.md?vue&type=template&id=3962bf8a

// CONCATENATED MODULE: ./website/docs/es/custom-theme.md

const script = {}
script.render = render

/* harmony default export */ var custom_theme = __webpack_exports__["default"] = (script);

/***/ })

}]);