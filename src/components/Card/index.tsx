import { Minus, Plus, ShoppingCartSimple, Trash } from 'phosphor-react'
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

interface CardProps extends CardPropStyles {
  dataProduct: {
    id: string
    name: string
    tags: string[]
    description: string
    value: number
    img: string
  }
}

export function Card({ variation = 'card', dataProduct }: CardProps) {
  const isVariationCard = variation !== 'row'
  const isVariationRow = variation === 'row'
  return (
    <CardContainer variation={variation}>
      <ImageContainer>
        <img src={`./src/assets/produtos/${dataProduct.img}`} alt="" />
      </ImageContainer>

      <InfoContainer>
        {isVariationCard && (
          <List>
            {dataProduct.tags.map((tagValue) => {
              return <li key={`${dataProduct.id}_${tagValue}`}>{tagValue}</li>
            })}
          </List>
        )}

        <Title>{dataProduct.name}</Title>

        {isVariationCard && <Text>{dataProduct.description}</Text>}

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
          <span>R$</span> {dataProduct.value}
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
