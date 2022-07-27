import { Card } from "./style"

const CharCard = ({ name, status, species, gender, image }) => {
    return (
        <Card status={status}>
            <h2>{name}</h2>
            <p>Espécie: {species}</p>
            <p>Gênero: {gender}</p>
            <p>Estatus: {status}</p>
            <img src={image} alt={name} />
        </Card>
    )
}
export default CharCard