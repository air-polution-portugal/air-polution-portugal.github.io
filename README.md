<!--
**air-polution-portugal/air-![]()polution-portugal**
-->

<h1>Carbon Intensity of the Economy</h1>

<h2> Portugal | 1995 - 2020</h2>


<h3> About </h3>
<p>
    The Carbon Intensity of the Economy - Portugal 1995-2020 project's main purpose is to provide an interactive data visualization of the carbon intensity of all economic sectors in Portugal. The project's dataset \[1\] relates to the period between 1995 and 2020, which indicates "how much carbon dioxide and other greenhouse gasses are emitted, in tons, for each million euros of wealth created" (PORDATA 2022). The ultimate goal of this project is to reveal, in a visual, intuitive, explanatory and interactive way, how the pollution levels caused by each of these sectors has evolved over 25 years. Thus, it is possible for the user to understand that some extremely polluting sectors in 1995 (namely the Energy Sector and the Water Capture, Treatment and Distribution Sector) are currently more eco-friendly; although, in 2020, the most polluting sector is still the Water Capture, Treatment and Distribution Sector. Through the identification of the most polluting sectors, the user can understand which sectors should be taken into account to reduce the ecological footprint. This visualization presentes its data one year at a time (depending on the user's interaction). A set of particles (represented by a circular shape, with lines emanating from its center) are then created, each one representative of an economic sector. The size of the particle is exponentially proportional to the respective value of the carbon intensity of its sector - the bigger the particle, the more polluting the sector is. In addition, the user has the opportunity to select each particle to obtain more detailed information about the selected sector (such as the percentage of greenhouse gasses emitted relative to the annual total). This data visualization, fully developed in p5.js (JavaScript), introduces a new way of interpreting and representing the data, It recodes the set of numeric values (data), into a visual, interactive and explainable narrative.
</p>

<h3> Contextualization </h3>
<p>
    As the world hurtles towards a point of no return with regards to climate change and its effects on the planet, it becomes increasingly vital for us to acknowledge the impact of human activity on the environment. The release of chemical compounds into the atmosphere leads to air pollution and alters the natural chemical makeup of the air. The effects of these emissions vary based on the substances released, the amount released, and external factors such as weather and geography. Among various other sources of atmospheric pollutants, human activities are a major contributor to the significant negative impact on the environment.
    <br>
    The quality of the air we breathe, and subsequently our health, is directly affected by this issue, making it imperative to understand the role of the Portuguese economy in contributing to it. In order to take effective action, it's crucial to identify which sectors of the economy have the most detrimental effects on the environment and focus on developing measures to combat greenhouse gas emissions.
    <br>
    <br>
    The data presented below covers all Portuguese economic sectors between 1995 and 2020, allowing the user to understand, for each economic sector, the number of tons of carbon dioxide and other greenhouse gases emitted per million euros of wealth generated.
    <br>
    This data visualization encourages the user to view and interpret the data in a more intuitive, interactive, and exploratory way.
</p>

<details><summary>Moodboard</summary>

<br>

![](anexos_relatorio/moodboard.jpg)

<br>

</details>

<details><summary> Sketches </summary>

![](anexos_relatorio/WireFrame_1.jpg)

![](anexos_relatorio/WireFrame_2.jpg)

![](anexos_relatorio/WireFrame_3.jpg)
</details>

<details><summary>Wireframes</summary>

![](anexos_relatorio/WireFrame_Figma_1.jpg)
![](anexos_relatorio/WireFrame_Figma_2.jpg)
![](anexos_relatorio/WireFrame_Figma_3.jpg)
![](anexos_relatorio/WireFrame_Figma_4.jpg)
![](anexos_relatorio/WireFrame_Figma_5.jpg)
</details>

<details><summary> Process </summary>

<br>

![](anexos_relatorio/sequencia.gif)

<br>

</details>

<details><summary> Tools </summary>
<br>

Microsoft Excel: Data Table

<br>

Paper and Pencil: Sketches

<br>

Figma: High-fidelity prototype (Wireframes)

<br>

P5.js: Code

<br>

[Library - C2.js](https://c2js.org/)

<br>
</details>

<details><summary>How to use</summary>

![](anexos_relatorio/como_utilizar_1.jpg)

<br>

![](anexos_relatorio/como_utilizar_2.jpg)

<br>

![](anexos_relatorio/como_utilizar_3.jpg)

<br>

![](anexos_relatorio/como_utilizar_4.jpg)

<br>

![](anexos_relatorio/como_utilizar_5.jpg)

<br>

</details>

<details><summary>Style Guide</summary>

<br>

![](anexos_relatorio/style_guide.jpg)

<br>
</details>

<details><summary> Data </summary>
<br>
[Data source](https://www.pordata.pt/portugal/intensidade+carbonica+da+economia+por+setor+de+atividade-3477)
<br>

[Data table](https://github.com/air-polution-portugal/air-polution-portugal.github.io/blob/main/00-Dados.csv)
</details>

<details><summary> Info Sectors </summary>
<br>

[( 0 ) Primary Sector](https://eportugal.gov.pt/categorias-de-actividade/agrc-anml-flrst-pesca)
<br>
[( 1 ) Extractive Industries](https://eportugal.gov.pt/categorias-de-actividade/extrativas)
<br>
[( 2 ) Manufacturing](https://eportugal.gov.pt/categorias-de-actividade/transformadoras)
<br>
[( 3 ) Energy](https://eportugal.gov.pt/categorias-de-actividade/elet-gas-vap-quen-frio)
<br>
[( 4 ) Water Capture, Treatment and Distribution](https://www.gee.gov.pt/pt/lista-publicacoes/estatisticas-setoriais/e-captacao-tratamento-e-distribuicao-de-agua-saneamento-gestao-de-residuos-e-despoluicao/36-captacao-tratamento-e-distribuicao-de-agua)
<br>
[( 5 ) Construction](https://eportugal.gov.pt/categorias-de-actividade/construcao)
<br>
[( 6 ) Tertiary Sector](https://eportugal.gov.pt/categorias-de-actividade/grossis-retalho-repar-auto-moto)
<br>
[( 7 ) Transport and Storage](https://eportugal.gov.pt/categorias-de-actividade/transporte-armazenam)
<br>
[( 8 ) Housing and Catering](https://eportugal.gov.pt/categorias-de-actividade/alojam-restaur)
<br>
[( 9 ) Information and Communication](https://eportugal.gov.pt/categorias-de-actividade/inform-comunic)
<br>
[( 10 ) Financial and Insurance Activities](https://eportugal.gov.pt/categorias-de-actividade/financeiro)
<br>
[( 11 ) Real Estate Activities](https://eportugal.gov.pt/categorias-de-actividade/imobiliario)
<br>
[( 12 ) Consulting, Scientific, Technical](https://eportugal.gov.pt/categorias-de-actividade/consult-cient-tecnic-similar)
<br>
[( 13 ) Administrative and Support Service Activities](https://eportugal.gov.pt/categorias-de-actividade/admin-apoio)
<br>
[( 14 ) Public Administration](https://dados.gov.pt/pt/datasets/administracao-publica-e-defesa-seguranca-social-obrigatoria/)
<br>
[( 15 ) Education](https://eportugal.gov.pt/categorias-de-actividade/educacao)
<br>
[( 16 ) Human Health Activities and Social Support](https://eportugal.gov.pt/categorias-de-actividade/saude-apoiosocial)
<br>
[( 17 ) Arts, Entertainment, Sports](https://eportugal.gov.pt/categorias-de-actividade/arte-desp-recreacao)
<br>
[( 18 ) Other Services](https://eportugal.gov.pt/categorias-de-actividade/outros-servpessoais)
<br>

</details>


<details><summary> References </summary>
<br>

- CRUZ, Pedro & SHIBUYA, Felipe.(n.d.) _[] cene_. [Here]([<ins>http://pmcruz.com/works/-cene.html</ins>](http://pmcruz.com/works/-cene.html));

<br>

- CRUZ, Pedro. _Visualizing Empires Decline_.(n.d.) [Here](http://pmcruz.com/works/visualizing-empires-decline.html);

<br>

- CRUZ, Pedro & WIHBEY, John & GHAEL, Avni & SHIBUYA, Felipe. Simulated Dendrochronology of U.S. immigration.(n.d.) [Here](https://pmcruz.com/dendrochronology/);

<br>

- CRUZ, Pedro. Um ecossistema POLÍTICO-EMPRESARIAL. [Here](https://pmcruz.com/eco/);

<br>

- FRAGAPANE, Federica. (2022)._Energy demand and the rhythm of everyday life_. Behance. [Here](https://www.behance.net/gallery/153326341/Energy-demand-and-the-rhythm-of-everyday-life);

<br>

- FRAGAPANE, Federica. (2022).The deepest lakes. Behance. [<ins>https://www.behance.net/gallery/148418917/The-deepest-lakes</ins>](https://www.behance.net/gallery/148418917/The-deepest-lakes);

<br>

- PEARSON, Matt. (2009).Life in 2050 Ident. Vimeo. [<ins>https://vimeo.com/10924639?login=true</ins>](https://vimeo.com/10924639?login=true);

<br>

- VARONE, Jason. Institute of Fine Arts Dissertations. Site. [<ins>https://yining1023.github.io/IFA/projects/ifa-dissertation/</ins>](https://yining1023.github.io/IFA/projects/ifa-dissertation/);

<br>

- CRUZ, Pedro. Um ecossistema POLÍTICO-EMPRESARIAL. Site. [<ins>https://pmcruz.com/eco/</ins>](https://pmcruz.com/eco/);

<br>

- CRUZ, Pedro & SHIBUYA, Felipe.  { }cene. Site. [<ins>http://pmcruz.com/works/-cene.html</ins>](http://pmcruz.com/works/-cene.html);

<br>

- CRUZ, Pedro.  Visualizing Empires Decline. Site. [<ins>http://pmcruz.com/works/visualizing-empires-decline.html</ins>](http://pmcruz.com/works/visualizing-empires-decline.html);

<br>

- PEARSON, Matt. (2011). Generative Art - a pratical guide using processing. Manning Publications;

<br>

- SHIFFMAN, Daniel. (2019, fevereiro, 25). Coding Challenge #123.1: Polar Perlin Noise Loops. Youtube. https://www.youtube.com/watch?v=ZI1dmHv3MeM;

</details>

<p>
Developers:
    <br>
    _Carolina Mendonça | nº 3200349
    <br>
    _Eduardo Vitorino | nº 3200337
</p>

