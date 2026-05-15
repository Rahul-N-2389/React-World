import { useState } from "react"

function SearchCard(props) {
    const [value, setValue] = useState("")
    const { userData } = props

    const user = [
        { id: 1, name: "Sanjay", movie: "Gajini", image: "https://www.behindwoods.com/tamil-movies/slideshow/suriya-bday-special-the-10-suriya-makeovers/images/4-sanjay-ramasamy-in-ghajini.jpg" },
        { id: 2, name: "Athreya", movie: "24", image: "https://pbs.twimg.com/media/CceUjCRWoAA5egQ.jpg" },
        { id: 3, name: "Narasinham", movie: "Singam", image: "https://m.media-amazon.com/images/S/pv-target-images/eb6e92e8a2da34863aa5f0e62fdf5de2b3c62112111616933b78e10b9b5ed2f5.jpg" },
        { id: 4, name: "maha", movie: "Akasam Nee haddhura", image: "https://www.iamgujarat.com/photogallery/entertainment/first-look-of-suriyas-telugu-movie-aakasam-nee-haddura/photo/74022691.cms" },
        { id: 5, name: "Dhamo", movie: "7th sense", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVqIi6psLyjYERG7JNf2UPFfT2X8jqoqt8Q&s" },
    ]

    const serBtn = (event) => {
        // console.log(event.target.value)
        setValue(event.target.value)
    }
    let filterData = user.filter(item => item.name.toLowerCase().includes(value.toLocaleLowerCase()))
    // console.log(filterData);

    return (
        <div>
            <input type="search" onChange={serBtn} />
            {
                filterData.length == 0 ? (
                    <div><h1>Data   not Found</h1></div>
                ) : (
                    filterData.map(item => (
                        <div key={item.id} style={{ backgroundColor: "skyblue", padding: "10px", margin: "5px" }}>
                            <h1>Name : {item.name}</h1>
                            <h1>movie : {item.movie}</h1>
                            <img src={item.image} width="200px" />
                        </div>
                    ))
                )
            }
        </div>
    )

}
export default SearchCard