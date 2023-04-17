import React from 'react'
import SideBar from './SideBar.jsx';
import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import FilterDate from './FilterDate.jsx';
import MainCard from './MainCard.jsx';
import SaleBalance from './SaleBalance.jsx'
import Cotations from './Cotations.jsx';
import CardTable from './CardTable.jsx';
import { Flex, Box } from '@chakra-ui/react';

export default function Main() {
  const subtitlesPlanos = [
    {
      title: 'Estagiários',
      qtdClients: '312 clientes',
      averagePrice: 'R$ 123,90',
    },
    {
      title: 'Diretoria',
      qtdClients: '312 clientes',
      averagePrice: 'R$ 123,90',
    },
    {
      title: 'Geral',
      qtdClients: '312 clientes',
      averagePrice: 'R$ 123,90',
    },
    {
      title: 'Almoxarifado',
      qtdClients: '312 clientes',
      averagePrice: 'R$ 123,90',
    }
  ]
  const subtitlesCategories = [
    {
      title: '6 vendas',
      qtdClients: '312 clientes',
      averagePrice: 'R$ 123,90',
    },
    {
      title: '12 vendas',
      qtdClients: '312 clientes',
      averagePrice: 'R$ 123,90',
    },
    {
      title: '24 vendas',
      qtdClients: '312 clientes',
      averagePrice: 'R$ 123,90',
    },
    {
      title: 'Personalizado',
      qtdClients: '312 clientes',
      averagePrice: 'R$ 123,90',
    }
  ]
  const subtitlesTypePlan = [
    {
      title: 'Construtoras',
      qtdClients: '312 clientes',
      averagePrice: 'R$ 123,90',
    },
    {
      title: 'Clientes finais',
      qtdClients: '312 clientes',
      averagePrice: 'R$ 123,90',
    },
  ]
  return (
    <Flex backgroundColor="#F4F7FE" height="100%">
        <SideBar />
        <Box width="84vw" p="49px 2%">
          <Header />
          <FilterDate />
          <Flex justify="space-between" width="72%" height="310px">
            <MainCard title="Receita total" totalValue="312.321,00" average="67,20" color="#EC7A7A"/>
            <MainCard title="Lucro total" totalValue="74.421,00" average="42,30" color="#7A85EC"/>
            <MainCard title="Lucro por venda" totalValue="3,12" average="12,40" color="#65D4AC"/>
          </Flex>
          <Box>
              <Flex justify="space-between">
                  <SaleBalance title="Clientes ativos" value="3.312" percentage="+2,6% (+12)" color="#05CD99"/>
                  <SaleBalance title="Novos clientes" value="12" percentage="+15,3% (+2)" color="#05CD99"/>
                  <SaleBalance title="Clientes adicionados" value="42" percentage="+42,6% (+8)" color="#05CD99"/>
                  <SaleBalance title="LTV" value="R$ 142,32" percentage="-22,6% (+R$ 12,20)" color="#CD0505"/>
                  <SaleBalance title="Turnover" value="24,3%" percentage="+42,6% (+3)" color="#05CD99"/>
                  <SaleBalance title="Turnover recuperado" value="54,42%" percentage="+32,6% (+6)" color="#05CD99"/>
              </Flex>
          </Box>
          <Box>
              <Flex justify="space-between">
                  <Cotations title="Cotações realizadas" totalValue="312.321" average="+15,3% (+223)  " color="#05CD99"/>
                  <Cotations title="Vendas finalizadas" totalValue="212.012" average="+15,3% (+223)" color="#05CD99"/>
                  <Cotations title="Cotações não concluídas" totalValue="42.021" average="+15,3% (+223)" color="#05CD99"/>
                  <Cotations title="Cotações não respondidas" totalValue="3.122" average="+15,3% (+223)" color="#05CD99" percent="3%"/>
              </Flex>
          </Box>
          <Box>
            <Flex justify="space-between">
              <CardTable h2="Planos" h3="123 planos ativos" titles={["CLUBE", "CLIENTES", "PREÇO"]} subtitles={subtitlesPlanos}/>
              <CardTable h2="Categorias" h3="4 categorias em uso" titles={["CLUBE", "CLIENTES", "PREÇO MÉDIO"]} subtitles={subtitlesCategories}/>
              <CardTable h2="Tipos de planos" h3="2 tipos em uso" titles={["CLUBE", "CLIENTES", "PREÇO MÉDIO"]} subtitles={subtitlesTypePlan}/>
            </Flex>
          </Box>
        </Box>
    </Flex>
  )
}
