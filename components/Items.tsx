
import Headset from "../public/assets/images/headset.webp";
import xlr from "../public/assets/images/xlr.webp";
import carregador from "../public/assets/images/carregador.webp";
import fone from "../public/assets/images/fone.webp";
import tampa from "../public/assets/images/tampa.webp";
import canaleta from "../public/assets/images/canaleta.webp";
import capa from "../public/assets/images/capa.webp";
import medusa from "../public/assets/images/medusa.webp";

import PatrimonyCarrousel from "./CarrousseulItems";
const things = [
  {
    id: 1,
    title: "Microfone headset multibanda",
    subtitle: "Microfones para apresentaçãoes teatrais",
    local: "prazeres",
    image: Headset,
    price: "R$ 1.999,00",
    urgency: "urgente",
    link: "https://produto.mercadolivre.com.br/MLB-2831070846-microfone-sem-fio-quadruplo-ksr-pro-kt4-head-80-canais-_JM?matt_tool=88695644&matt_word=&matt_source=google&matt_campaign_id=14300459461&matt_ad_group_id=126793517756&matt_match_type=&matt_network=g&matt_device=c&matt_creative=543111991139&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=655478219&matt_product_id=MLB2831070846&matt_product_partition_id=1817816228848&matt_target_id=aud-1966490908987:pla-1817816228848&cq_src=google_ads&cq_cmp=14300459461&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=Cj0KCQjw_-GxBhC1ARIsADGgDjuh7uCETqeEE3SkYWsCleSqk15KG9Dj4hb2fsZPmIavo-tB8-e4bqcaAirQEALw_wcB",
  },
  {
    id: 2,
    title: "Cabos Balanceados",
    subtitle: "Cabos para reposição dos faltantes",
    local: "prazeres",
    image: xlr,
    price: "R$ 78,00",
    urgency: "urgente",
    link: "https://produto.mercadolivre.com.br/MLB-4353669688-cabo-microfone-balanceado-santo-angelo-xlr-457m-_JM#position%3D46%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3De52e3665-413e-4fe6-9952-475168d6e8e8",
  },
  {
    id: 3,
    title: "Carregador de bateria 9v",
    subtitle: "Para carregar a bateria do violão",
    local: "prazeres",
    image: carregador,
    price: "R$ 41,90",
    urgency: "urgente",
    link: "https://www.mercadolivre.com.br/carregador-de-pilhas-baterias-bivolt-auto-stop-mox-mo-cp50/p/MLB29073930#searchVariation%3DMLB29073930%26position%3D22%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Db4f4c23b-c1f4-47c4-be00-431e21ecca7e",
  },
  {
    id: 4,
    title: "Almofadas Akg K72",
    subtitle: "Recondicionamento do fone de monitoramento da x32",
    local: "prazeres",
    image: fone,
    price: "R$ 129,90",
    urgency: "urgente",
    link: "https://produto.mercadolivre.com.br/MLB-3759088843-headband-almofada-gel-para-fone-de-ouvido-akg-k52-k72-k92-_JM?variation=#reco_item_pos=1&reco_backend=ranker-retrieval-v2p_marketplace&reco_backend_type=low_level&reco_client=vip-v2p&reco_id=cefbc51b-cf3c-483c-9c4b-f27180383fef",
  },
  {
    id: 5,
    title: "Tampa Microfone sem fio Shure ",
    subtitle: "Recondicionamento do Microfone",
    local: "prazeres",
    image: tampa,
    price: "R$ 45,60",
    urgency: "urgente",
    link: "https://produto.mercadolivre.com.br/MLB-1005325129-tampa-bateria-microfone-sem-fio-shure-slx-pgx-original-_JM?variation=41243392433#reco_item_pos=1&reco_backend=ranker-retrieval-v2p_marketplace&reco_backend_type=low_level&reco_client=vip-v2p&reco_id=cd75fcd5-8202-4e20-9e7a-abe9107e1995",
  },
  {
    id: 6,
    title: "Medusa 12 canais",
    subtitle: "Medusa para condicionamento dos cultos do Templo Anexo",
    local: "prazeres",
    image: medusa,
    price: "R$ 1.271,99",
    urgency: "urgente",
    link: "https://www.mercadolivre.com.br/medusa-12-vias-com-conectores-combo-cirilo-cabos-25-metros/p/MLB22343869?pdp_filters=item_id:MLB3642396178#is_advertising=true&searchVariation=MLB22343869&position=1&search_layout=stack&type=pad&tracking_id=86718c4e-62fd-4281-9c18-78e915148825&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=YmU3MjU5NTItMjgxYS00OGQ0LWIxODItOGIyZGQxYWJkNjY2",
  },
  {
    id: 7,
    title: "Canaleta Pvc x 3",
    subtitle: "Para a organização dos fios da cabine",
    local: "prazeres",
    image: canaleta,
    price: "R$ 73,99",
    urgency: "urgente",
    link: "https://produto.mercadolivre.com.br/MLB-3260897947-canaleta-recorte-aberto-cinza-50x50mm-2-metros-dutoplast-_JM#polycard_client=recommendations_pdp-pads-up&reco_backend=recos-merge-experimental-pdp-up-b_marketplace&reco_client=pdp-pads-up&reco_item_pos=1&reco_backend_type=low_level&reco_id=9e937c10-68aa-4eb7-9e38-599827e517cc&is_advertising=true&ad_domain=PDPDESKTOP_UP&ad_position=2&ad_click_id=OWE5NGM2ZDUtMjI2ZC00YzI4LWE5ZWItODU1ZmY1N2ViYzE3",
  },
  {
    id: 8,
    title: "Capa / Case teclado MX61",
    subtitle: "Capa para a proteção do teclado da igreja",
    local: "prazeres",
    image: capa,
    price: "R$ 589,00",
    urgency: "urgente",
    link: "https://produto.mercadolivre.com.br/MLB-1025399907-case-estojo-para-teclado-yamaha-mx61-kromus-_JM#position=3&search_layout=stack&type=item&tracking_id=aa920082-8c84-433b-8e7c-be94987b2093",
  },
];

const PatrimonyCard = () => {
  return (
    <>
      <div className="bg-[#999] w-full size-44">
        <PatrimonyCarrousel itens={things} />
      </div>
    </>
  );
};

export default PatrimonyCard;