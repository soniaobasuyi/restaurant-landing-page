import './styles/App.css'

function App() {
  return (
    <>
        <img className='top-background-image' src='src/assets/top-background-banner.svg' alt='background image'/>
        <img className='top-food-image' src='src/assets/top-food-image.svg' alt='food image'/>
        <div className='nav-section'>
            <img className='icon' src={'src/assets/foodie.svg'} alt='foodie icon'/>
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
            <img className='about-background-image' src='src/assets/About-Section-Background.svg' alt='background image'/>
            <img className='about-food-image' src='src/assets/About-Page-Food-Image.svg' alt='food image'/>
            <div className='about-info'>
                <h4 className='about-text'>About</h4>
                <h1>Food Is An Important Part Of A Balanced Diet</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
                <p>Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
                <button>Learn More</button>
                <img src='src/assets/play-video.svg' alt='play video icon'/>
                <h4 className='watch-video'>Watch Video</h4>
            </div>
        </div>

        <div id='work-section'>
            <div className='work-heading'>
                <h4 className='work-text'>Work</h4>
                <h1>How It Works</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
            </div>

            <div className='features'>
                <div className='features-content'>
                    <img className='features-image' src='src/assets/pick-meals.svg' alt='pick meals image'/>
                    <h4>Pick Meals</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
                </div>
                <div className='features-content'>
                    <img className='features-image' src='src/assets/choose-how-often.svg' alt='pick meals image'/>
                    <h4>Choose How Often</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et </p>
                </div>
                <div className='features-content'>
                    <img className='features-image fast-delivery' src='src/assets/fast-deliveries.svg' alt='pick meals image'/>
                    <h4>Fast Deliveries</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum</p>
                </div>
            </div>

        </div>

        <div id='testimonial-section'>
            <div className='testimonial-heading'>
                <h4 className='testimonial-text'>Testimonial</h4>
                <h1>What They Are Saying</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
            </div>

            <div className='user-testimony'>
                <img className='user-image' src='src/assets/person.svg' alt='user image'/>
                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
                <img className='star-rating' src='src/assets/star-rating.svg' alt='ratings'/>
                <img className='star-rating' src='src/assets/star-rating.svg' alt='ratings'/>
                <img className='star-rating' src='src/assets/star-rating.svg' alt='ratings'/>
                <img className='star-rating' src='src/assets/star-rating.svg' alt='ratings'/>
                <img className='star-rating' src='src/assets/star-rating.svg' alt='ratings'/>
                <h3>John Doe</h3>
            </div>
        </div>

        <div id='contact-section'>
            <h1 className='contact-heading'>Have Question In Mind? Let Us Help You</h1>

            <form>
                <div className='input-container'>
                    <input className='input-field' type='email' placeholder='yourmail@gmail.com'/>
                    <button type={"submit"}>Submit</button>
                </div>
            </form>
        </div>

        <div id='footer'>
            <div className='footer-section-1'>
                <h3>FOODIE</h3>
                <div>
                    <img  className='socials-link-image' src='src/assets/twitter-icon.svg'/>
                    <img className='socials-link-image' src='src/assets/linkedIn-icon.svg'/>
                    <img className='socials-link-image' src='src/assets/youtube-icon.svg'/>
                    <img className='socials-link-image' src='src/assets/facebook-icon.svg'/>
                </div>
            </div>

            <div className='footer-section-2'>
                <div className='footer-content'>
                    <p>Quality</p>
                    <p>Help</p>
                    <p>Share</p>
                    <p>Careers</p>
                    <p>Work</p>
                    <p>Testimonials</p>
                </div>
                <div className='footer-content'>
                    <p>244-5333-7783</p>
                    <p>hello@food.com</p>
                    <p>press@food.com</p>
                    <p>contact@food.com</p>
                </div>
                <div className='footer-content'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
