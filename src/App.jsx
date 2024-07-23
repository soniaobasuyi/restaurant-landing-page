import './styles/App.css'

function App() {
  return (
    <>
        <img className='top-background-image' src='src/assets/top-background-banner.svg' alt='background image'/>
        <img className='top-food-image' src='src/assets/top-food-image.svg' alt='food image'/>
        <div className='nav-section'>
            <img className='icon' src='src/assets/foodie.svg' alt='foodie icon'/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Testimonials</li>
                <li>Contact</li>
                <li>
                    <img src='src/assets/cart.svg' alt='cart image'/>
                </li>
                <li>
                    <button>Booking Now</button>
                </li>
            </ul>
        </div>

        <div id='home-section'>
            <h1>Your Favourite Food Delivered Hot & Fresh</h1>
            <p>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.</p>
            <button>Order Now <img className='arrow' src='src/assets/arrow.svg' alt='forward-arrow'/></button>
        </div>

        <div id='about-section'>
            <img className='about-background' src='src/assets/About-Section-Background.svg'/>
            <img className='about-food-image' src='src/assets/About-Page-Food-Image.svg'/>

            <div className='about-info'>
                <h4>About</h4>
                <h1>Food Is An Important Part Of A Balanced Diet</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
                <p>Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>

            </div>
        </div>
    </>
  )
}

export default App
