const btneditorial= document.querySelector('#btneditorial')
const btnvarzea = document.querySelector("#btnvarzea")
const btnCgrande = document.querySelector("#btnCgrande")
const btnBoaVista = document.querySelector("#btnBoaVista")
const btnParnamirim = document.querySelector("#btnParnamirim")
const btnSantoAmaro = document.querySelector("#btnSantoAmaro")
const content = document.querySelector("#content")



btneditorial.addEventListener('click', insereEditorial)

function insereEditorial(){
    content.innerHTML=`
    <h1>Editorial</h1>
<h4>edição 001/2022</h4>
              
<p>
Olá! Sou Maria de Fátima Santana e, há mais de 27, anos atuo como consultora 
imobiliária no Recife e na Região Metropolitana, sempre comprometida com valores
éticos e profissionais. 
<br><br>
Para celebrar mais um ano nesta área profissional que eu tanto amo, lanço a
primeira edição da Revista digital bem viver, com temas variados e atuais sobre este universo do mercado imobiliário e 
áreas correlatas. Nesta primeira edição vamos fazer um breve passeio por alguns bairros do Recife.
<br><br>

Meu principal objetivo ao longo desses 27 anos é ajudar pessoas na realização 
do sonho de bem viver, em um imóvel coerente com seu estilo de vida e compatível com seus anseios, por isso esta revista digital chama-se "Bem viver". 
Espero que goste da leitura e se quiser conversar, já sabe, basta clicar <a href="https://api.whatsapp.com/send?phone=5581992727064&text=Ol%C3%A1%20Maria%20de%20F%C3%A1tima.%20Encontrei%20esse%20link%20na%20sua%20revista%20digital"> <strong> neste link</strong> </a>. 
</p> `

    
}


btnvarzea.addEventListener('click',insereVarzea)

function insereVarzea(){
content.innerHTML=`
<h1>Bairro da Várzea</h1>
<h4>Principais Características</h4>
<img src="https://assets.avanzzada.com.br/wp-content/uploads/sites/12/2021/10/27140908/ufpe-748x410-1.jpg" alt="">
               
<p>

Com uma localização geográfica privilegiada, no bairro da Várzea 
é possível encontrar estabelecimentos que o tornam uma pequena cidade 
dentro do Recife. Além disso, conta com Universidade, hospitais, 
Instituto Federal, escolas, igrejas e museus.</p>
<br>
    
<img src="https://midiaalgomais.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/05/12212305/Instituto_Ricardo_Brennand.jpeg" alt="">
               <h4> Instituto Ricardo Brennand - museu das armas<br> crédito:divulgação</h4>
               <p>
"A Várzea é um bairro em expansão na cidade. A população gosta da 
área, é um local tranquilo e perto do centro. Sem falar na qualidade de vida, que é 
um destaque", apontou o presidente da ADEMI, em entrevista ao Diário de Pernambuco. 

</p> `

}
btnCgrande.addEventListener('click', insereCgrande)

function insereCgrande(){
    content.innerHTML=`
    <h1> Bairro de Campo Grande</h1>
    <h4> Principais características </h4>
    <img src="http://www.cultura.pe.gov.br/wp-content/uploads/2021/01/centro-de-convencoes-pernambuco-empetur.jpg" alt="">
         <h4> Centro de convenções <br> créditos:Empetur</h4>        
                
                    <p>
                    Campo Grande é um excelente bairro do Recife. Na Zona Norte, 
                    fica em uma localização privilegiada: próximo ao Centro do Recife
                    e bem perto da Cidade de Olinda. 
                    <br>
                    <img src="https://www.joaoalberto.com/wp-content/uploads/2021/06/09/atacaruna.jpg" alt="">
       
                    O Comércio local é uma forte característica do bairro. Com 
                    farmácias, supermercados, mercadinhos de bairro e ótimas opções
                    de lazer próximo, como o Mirabilândia e o Shopping Tacaruna, é 
                    uma opção de bairro para quem gosta de praticidade. Além de tudo isso, 
                    é uma área tranquila para se viver.
                    
                    </p>
               
                    `
}
btnParnamirim.addEventListener('click', insereParnamirim)

function insereParnamirim(){
    content.innerHTML=`
    <h1> Bairro do Parnamirim</h1>
    <h4>Principais características:</h4>
    
    <p>
    O Parnamirim é um bairro muito tranquilo e arborizado, localizado
    na Zona Norte do Recife, teve origem em uma área cortada pelo
    Riacho do Parnamirim, que dá nome ao bairro. Faz limites com os bairros de Casa Amarela, Poço 
    da Panela, Casa Forte, Santana, Torre, Jaqueira e Tamarineira.</p>
    <br>
    <img src="https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2019/02/11/777035/20190212144519839218a.jpg" alt="">
              
    <p>  Quem visita ou mora no Parnamirim, pode desfrutar de áreas muito arborizadas
    e também dos melhores serviços e lojas da cidade. Morar neste bairro é, por fim, aproveitar muita tranquilidade e 
    ter acesso à total comodidade.</p>
     ` 
}
btnBoaVista.addEventListener('click', insereBVista)

function insereBVista(){
    content.innerHTML=`
    <h1> Bairro da Boa Vista</h1>
     <h4>Principais características</h4>
    <img src="https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2022/08/02/902376/20220802111855747755o.jpg" alt="">
                <p>
                O bairro da Boa Vista é um dos mais importantes do Recife.
                No coração da cidade, a Boa Vista abriga um conjunto de edificações
                públicas e privadas de grande interesse da população local. É o caso do Shopping Boa Vista,
                Cinema São Luiz, Teatro do Parque, escolas, faculdades, lojas de rua, 
                Mercado da Boa Vista e a famosa Padaria de Santa Cruz, para citar alguns.</p>
                <img src="https://visit.recife.br/wp-content/uploads/2018/04/o-que-fazer-cinema-sao-luiz-destaque.jpg">
                <h4> Cinema São Luiz <br> créditos:Divulgação</h4>
                <br>
                <p>
                É uma área de fácil acesso e que faz ligações com outros bairros do Recife, 
                como o Recife Antigo, Santo Amaro e Ilha do Leite. Morar na Boa Vista é sinônimo de agilidade e praticidade.
    </p>
              `
}
btnSantoAmaro.addEventListener('click', insereSAmaro)
function insereSAmaro(){
    content.innerHTML=`
    <h1> Bairro de Santo Amaro</h1>
    <h4>Principais Características</h4>
    <img src="https://visit.recife.br/wp-content/uploads/2017/10/o-que-fazer-rua-da-aurora-lista.jpg" alt="">
               
    <p>
    O bairro de Santo Amaro faz ligação com o Centro do recife(pelo 
        bairro vizinho da Boa Vista  e através da Ponte de Limoeiro, com o Recife Antigo), 
        até a Zona Norte da Cidade, limitando-se com a cidade de Olinda.
        <br>
        Recentemente, com a valorização imobiliária da região, o
        bairro de Santo Amaro vem ganhando cada vez mais melhorias na 
        infraestrutura e mobilidade urbana. As praças
        e parques, como a Rua da Aurora, voltaram a ser cartões postais 
        do bairro que cresce a cada dia.
    
    </p>
`
}