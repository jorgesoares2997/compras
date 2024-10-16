"use client";
import ram1 from "../public/assets/images/ram1.webp";
import ram2 from "../public/assets/images/ram2.webp";
import kingston1 from "../public/assets/images/kingston1.webp";
import kingston2 from "../public/assets/images/kingston2.webp";
import lenovo from "../public/assets/images/lenovo.webp";
import dmx from "../public/assets/images/dmx.webp";
import mouse from "../public/assets/images/mouse.jpg";
import dvi from "../public/assets/images/dvi.webp";
import radio from "../public/assets/images/radio.webp";
import PatrimonyCarrousel from "./CarrousseulItems";

const things = [
  {
    id: 1,
    title: "Memoria Ram DDR3 4Gb",
    subtitle: "DRAM Frequency: 532.0 MHz",
    local: "Prazeres",
    image: ram1,
    price: 169,
    urgency: "low",
    link: "https://produto.mercadolivre.com.br/MLB-869873395-memoria-4gb-ram-notebook-acer-aspire-e1-510-e1-532-e1-572-_JM#polycard_client=search-nordic&position=1&search_layout=grid&type=item&tracking_id=57856ab3-832f-4fef-b524-122ce7a0f015",
  },
  {
    id: 2,
    title: "Memoria Ram DDR3 4Gb",
    subtitle: "DRAM Frequency: 400.0 MHz",
    local: "Prazeres",
    image: ram2,
    price: 88,
    urgency: "low",
    link: "https://produto.mercadolivre.com.br/MLB-4203452490-memoria-ddr3-4gb-notebook-lg-lgc40-c400-a410-com-nf-_JM#polycard_client=search-nordic&position=3&search_layout=grid&type=item&tracking_id=252e933e-da34-4f10-9a55-afd050b1debd",
  },
  {
    id: 3,
    title: "2x SSD 240gb",
    subtitle: "SSD Kingston 240 gb",
    local: "Prazeres",
    image: kingston2,
    price: 154,
    urgency: "low",
    link: "https://www.mercadolivre.com.br/ssd-240gb-sata-3-kingston-a400-sa400s37240g-preto/p/MLB19035706#polycard_client=search-nordic&wid=MLB3867133787&sid=search&searchVariation=MLB19035706&position=3&search_layout=grid&type=product&tracking_id=f9f7ac7d-3d6d-4239-8c9a-3b53c6d0b032",
  },
  {
    id: 4,
    title: "2x SSD 120gb",
    subtitle: "SSD Kingston 120 gb",
    local: "Prazeres",
    image: kingston2,
    price: 123,
    urgency: "low",
    link: "https://www.mercadolivre.com.br/hd-ssd-kingston-120gb-a400-sata-3-6gbs-500mbs-cor-preto/p/MLB22335843#polycard_client=search-nordic&wid=MLB3866463313&sid=search&searchVariation=MLB22335843&position=12&search_layout=grid&type=product&tracking_id=9828c23c-1d28-4755-9f9d-4caf55804526",
  },
  {
    id: 5,
    title: "Teclado do notebook Lenovo",
    subtitle: "Recondicionamento do teclado do notebook",
    local: "Prazeres",
    image: lenovo,
    price: 63,
    urgency: "low",
    link: "https://produto.mercadolivre.com.br/MLB-1309113964-teclado-nsk-bz1sq-1b-para-lenovo-ideapad-320-80yf0008br-_JM#position=6&search_layout=grid&type=item&tracking_id=ed0f4ae1-c88e-4681-83fa-779a8c063d5a",
  },
  {
    id: 6,
    title: "Interface Usb Dmx",
    subtitle: "Interface para a mesa de iluminação",
    local: "Prazeres",
    image: dmx,
    price: 178,
    urgency: "medium",
    link: "https://produto.mercadolivre.com.br/MLB-1193880236-interface-usb-dmx-sua-mesa-de-iluminaco-pelo-pc-sl1000-_JM?variation=76471790905&quantity=1",
  },
  {
    id: 7,
    title: "2x Mouse de fio",
    subtitle: "Mouses para os computadores da sala de streaming",
    local: "Prazeres",
    image: mouse,
    price: 42,
    urgency: "high",
    link: "https://www.amazon.com.br/dp/B075FF1WM4/ref=twister_B08MWDDF8G?_encoding=UTF8&th=1",
  },
  {
    id: 8,
    title: "2x Adaptador DVI",
    subtitle: "Adaptadores DVI - HDMI",
    local: "Prazeres",
    image: dvi,
    price: 13,
    urgency: "medium",
    link: "https://produto.mercadolivre.com.br/MLB-1829985519-adaptador-dvi-d-macho-p-241-x-hdmi-femea-contatos-banhado-_JM#polycard_client=search-nordic&position=20&search_layout=grid&type=item&tracking_id=955feb1f-23a9-431c-8a3e-2d4ede48fb0b",
  },
  {
    id: 9,
    title: "4x Radio Comunicadores",
    subtitle: "Radios para a comunicação da equipe",
    local: "Prazeres",
    image: radio,
    price: 140,
    urgency: "high",
    link: "https://produto.mercadolivre.com.br/MLB-4055736358-radio-comunicador-bf-777s-baofeng-bandas-de-frequncia-16-_JM#position=35&search_layout=stack&type=item&tracking_id=dcc63f3f-dedd-4537-9497-05248317c502",
  },
];

const StreamingCard = () => {
  return (
    <div className="bg-transparent w-full size-44 carrousel-container">
      <PatrimonyCarrousel itens={things} />
    </div>
  );
};

export default StreamingCard;
