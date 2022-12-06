import { Minus, Plus, ShoppingCartSimple, Trash } from 'phosphor-react'
import imgCafe from '../../assets/produtos/cafe-arabe.png'
import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  List,
  Title,
  Text,
  Price,
  ButtonCart,
  Footer,
  Controls,
  ButtonIcrement,
  CardPropStyles,
  ButtonRemove,
} from './styles'

interface CardProps extends CardPropStyles {}

export function Card({ variation = 'card' }: CardProps) {
  const isVariationCard = variation !== 'row'
  const isVariationRow = variation === 'row'

  return (
    <CardContainer variation={variation}>
      <ImageContainer>
        <img src={imgCafe} alt="" />
      </ImageContainer>

      <InfoContainer>
        {isVariationCard && (
          <List>
            <li>tradicional</li>
            <li>com leite</li>
            <li>com leite</li>
          </List>
        )}

        <Title>Expresso Tradicional</Title>

        {isVariationCard && (
          <Text>O tradicional café feito com água quente e grãos moídos</Text>
        )}

        {isVariationRow && (
          <Controls>
            <ButtonIcrement>
              <button>
                <Minus />
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={1}
              />
              <button>
                <Plus />
              </button>
            </ButtonIcrement>
            <ButtonRemove variation="simple">
              <Trash size="1rem" /> REMOVER
            </ButtonRemove>
          </Controls>
        )}
      </InfoContainer>

      <Footer>
        <Price>
          <span>R$</span> 9,90
        </Price>
        {isVariationCard && (
          <Controls>
            <ButtonIcrement>
              <button>
                <Minus />
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={1}
              />
              <button>
                <Plus />
              </button>
            </ButtonIcrement>
            <ButtonCart to="/checkout" title="Ir para o checkout">
              <ShoppingCartSimple weight="fill" />
            </ButtonCart>
          </Controls>
        )}
      </Footer>
    </CardContainer>
  )
}
