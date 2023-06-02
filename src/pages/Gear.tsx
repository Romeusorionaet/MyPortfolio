import { Header } from "../components/Header" ;
import { Footer } from "../components/Footer" ;
import { CardGear } from "../components/CardGear" ;

export function Gear() {

    return(
        <div 
        className="min-h-screen bg-gradient-to-t from-blue-800 to-slate-900 pt-20">
            
            <Header />

            <h1 className="ml-1 mt-2 tablet:px-36">Meu SetUp</h1>

            <section className="mb-10 flex gap-6 flex-wrap justify-center px-4 tablet:px-20">
                <CardGear
                    image={'https://th.bing.com/th/id/OIP.Fsy9ajZBAUKuJV_YBSGjcQHaIE?pid=ImgDet&rs=1'} 
                    title={'Monitor'}
                    description="Monitor Philips LCD, Full HD e 75Hz."
                    link={'https://th.bing.com/th/id/OIP.Fsy9ajZBAUKuJV_YBSGjcQHaIE?pid=ImgDet&rs=1'}
                />

                <CardGear
                    image={'https://th.bing.com/th/id/OIP.-ypqXdjsPvxIxuZtopQNogHaHa?pid=ImgDet&w=800&h=800&rs=1'} 
                    title={'Placa de Video'}
                    description="Placa de Video pny GeForce gtx 1650 4GB GDDR6 128bit."
                    link={'https://th.bing.com/th/id/OIP.-ypqXdjsPvxIxuZtopQNogHaHa?pid=ImgDet&w=800&h=800&rs=1'}
                />
                
                <CardGear
                    image={'https://www.tunisianet.com.tn/155061-large/processeur-amd-ryzen-5-1600-af.jpg'} 
                    title={'Processador'}
                    description="Processador AMD Ryzen 5 1600 AF, velocidade de clock base 3.20 GHz, 6 núcleos e 12 threads."
                    link={'https://www.tunisianet.com.tn/155061-large/processeur-amd-ryzen-5-1600-af.jpg'}
                />

                <CardGear
                    image={'https://th.bing.com/th/id/R.350a94e8ef793335c7a71642d6ba4e20?rik=wSnvPiwaJAXj8A&pid=ImgRaw&r=0'} 
                    title={'Mémoria Ram'}
                    description="16gb de mémoria ram da XPG x TUF Gaming Alliance rgb de 3000 MHz"
                    link={'https://th.bing.com/th/id/R.350a94e8ef793335c7a71642d6ba4e20?rik=wSnvPiwaJAXj8A&pid=ImgRaw&r=0'}
                />
                
                <CardGear
                    image={'https://www.lojamegabrasil.com.br/image/cache/catalog/0placa%20mae/ab350m-1450x1450.jpg'} 
                    title={'Placa Mãe'}
                    description="Placa mãe Gigabyte AB350M-DS3H V2, Socket AM4, memória interna máxima: 64 GB,
                    Interfaces suportadas de armazenamento: M.2, SATA III, Resolução máxima: 4096 x 2160 pixels,
                    micro ATX AMD B350 7.1 canais e 4 slots para mémoria ram."
                    link={'https://www.lojamegabrasil.com.br/image/cache/catalog/0placa%20mae/ab350m-1450x1450.jpg'}
                />

                <CardGear
                    image={'https://dattocommerce.azureedge.net/0-master/productimages/4e/56b393368461d5.jpg?width=1500&height=1500&scale=canvas'} 
                    title={'Cooler'}
                    description="Cooler Master, 4 heatpipes de contato direto e iluminação em LED RGB. Mais 4 fans rgb distribuido pelo gabinete."
                    link={'https://dattocommerce.azureedge.net/0-master/productimages/4e/56b393368461d5.jpg?width=1500&height=1500&scale=canvas'}
                />
                
                <CardGear
                    image={'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/p/gp-p550b4.jpg'} 
                    title={'Fonte'}
                    description="Fonte Gigabyte GP-P550B, 550W, 80 Plus Bronze."
                    link={'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/p/gp-p550b4.jpg'}
                />
                
                <CardGear
                    image={'https://cdn.shopify.com/s/files/1/0381/0807/0028/products/imageTemplate1500x1500_2x_8cbc833a-6717-4aa3-bbbf-65d499f4f2ca_1024x1024@2x.png?v=1588446034'} 
                    title={'SSD'}
                    description="SSD Western Gigital, capacidade de 1tb e leitura de 545MG/s."
                    link={'https://cdn.shopify.com/s/files/1/0381/0807/0028/products/imageTemplate1500x1500_2x_8cbc833a-6717-4aa3-bbbf-65d499f4f2ca_1024x1024@2x.png?v=1588446034'}
                />
                
                <CardGear
                    image={'https://th.bing.com/th/id/OIP.DhDYJVtTL2EFXZH-MswM0QHaHa?pid=ImgDet&rs=1'} 
                    title={'Gabinite'}
                    description="Gabinete Gamer."
                    link={'https://th.bing.com/th/id/OIP.DhDYJVtTL2EFXZH-MswM0QHaHa?pid=ImgDet&rs=1'}
                /> 

                <CardGear
                    image={'https://www.umpoukodetudo.com.br/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/i/m/import-3.jpg'} 
                    title={'Teclado'}
                    description="Teclado Gamer Mecânico, USB, RGB, Switch azul, G Pro k7 Plus, 67703, Fortrek - CX 1 UN."
                    link={'https://www.umpoukodetudo.com.br/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/i/m/import-3.jpg'}
                />

                <CardGear
                    image={'https://th.bing.com/th/id/OIP.3V1IXPhdmMPM7MiTd6SXzQHaHa?pid=ImgDet&rs=1'} 
                    title={'Mouse'}
                    description="Mouse Redragon Cobra, M711, preto com LED RGB."
                    link={'https://th.bing.com/th/id/OIP.3V1IXPhdmMPM7MiTd6SXzQHaHa?pid=ImgDet&rs=1'}
                />

                <CardGear
                    image={'https://th.bing.com/th/id/R.4c77bca88aa959fe7ced79f274a66a2e?rik=4jowYmGSSHgthg&pid=ImgRaw&r=0'} 
                    title={'Headset'}
                    description="Headset Gamer Havit H2002D - Conector 3.5mm - HV-H2002D."
                    link={'https://th.bing.com/th/id/R.4c77bca88aa959fe7ced79f274a66a2e?rik=4jowYmGSSHgthg&pid=ImgRaw&r=0'}
                />

                <CardGear
                    image={'https://img.kalunga.com.br/fotosdeprodutos/145014z.jpg'} 
                    title={'Webcam'}
                    description="Webcam Full HD C922 Pro Stream - Logitech CX 1 UN."
                    link={'https://img.kalunga.com.br/fotosdeprodutos/145014z.jpg'}
                />

            </section>
            
            <Footer />

        </div>
    )
}