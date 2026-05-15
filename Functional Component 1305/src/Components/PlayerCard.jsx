
function PlayerCard(props) {
    const { Name, Franchise, JerseyNo } = props
    return (
        <div>
            <h1>Name : {Name}</h1>
            <h1>Franchise : {Franchise}</h1>
            <h1>Jersey No : {JerseyNo}</h1>
        </div>
    )
}
export default PlayerCard