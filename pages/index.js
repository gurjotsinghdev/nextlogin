import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const emailCheck = event => {
    event.currentTarget.style.backgroundColor = 'salmon';
    event.currentTarget.style.color = 'white';

  };

  return (
    
    <>
      <Head>
        <title>Login Form BF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      </Head>
      <main className="container">
        <div className="form-section">
          <h2>Let's set up your account</h2>
          <p>Already have an account? &nbsp;&nbsp;<a href="#">Sign in</a></p>
          <form className="contact" action="/send-data-here" method="post">
            <input className="text-input" type="text" id="your-name" name="your-name" required placeholder="Your name" />
            <label>Your name</label>

            <input className="text-input" type="email" id="email-address" name="email-address" required placeholder="Email address"/>
            <label>Email address</label>

            <select className="text-input" placeholder="I would describe my user type as" >
              <option value="one">I would describe my user type as</option>
              <option value="two">Option 2</option>
            </select>
            <label>I would describe my user type as</label>

            <div>
            <input className="text-input" type="password" name="password" required placeholder="Password" ></input>
            <i class="fa fa-eye" ></i>
            </div>
            <label>Password</label>

            <p className="help-message">Minimum 8 characters</p>
            <button type="submit">Next</button>
            <p className="privacy">By clicking the "Next" button, you agree to creating a free account, and to <a href="#">Terms of Service</a> and  <a href="#">Privacy Policy.</a></p>

          </form>

        </div>
        <div className="info-section">
          <h2>Dummy Heading</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>


      </main>





    </>
  )
}
