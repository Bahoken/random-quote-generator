import './QuotesBox.css';
import { quotesData,colors } from './../data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faFeatherPointed,faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const random = (tab) => {
    var randomElement = tab[Math.floor(Math.random()*tab.length)];
    return randomElement;
}

const InitialQuote = random(quotesData);
const InitialColor = random(colors);
const InitialAuthor = InitialQuote.author;
const InitialMessage = InitialQuote.quote;

const QuotesBox = () => {

    const handleClick = () => {

        const buttons = document.querySelectorAll('.button');

        const quoteText = document.getElementById('text');

        const author = document.getElementById('author');

        const body = document.getElementsByTagName("body")[0].style;

        
        const color = random(colors);

        const quote = random(quotesData);

        const quoteMessage = quote.quote;

        let quoteAuthor = quote.author;

        // console.log('### tab', typeof buttons);

        buttons.forEach(element => {
            element.style.background = color;
        });



        body.color = color;

        body.backgroundColor = color;

        quoteText.innerHTML = quoteMessage;

        author.innerHTML = quoteAuthor;

    }

    return(
        <div id="quote-box">

            <div className="quote-text">
                <FontAwesomeIcon icon={faQuoteLeft} className="icon"  />
                {" "}
                <span id="text">
                    { InitialMessage }
                </span>
                {" "}
            </div>

            <div className="quote-author">
                {"-- "}
                <span id="author">
                    { InitialAuthor }
                    &nbsp;
                    <FontAwesomeIcon icon={faFeatherPointed} />
                </span>
            </div>


            <div className="buttons">
                <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22In%20order%20to%20succeed%2C%20your%20desire%20for%20success%20should%20be%20greater%20than%20your%20fear%20of%20failure.%22%20Bill%20Cosby" id="tweet-quote" className="button" target="_top" title="Tweet this quote">
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>
                <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Bill%20Cosby&content=In%20order%20to%20succeed%2C%20your%20desire%20for%20success%20should%20be%20greater%20than%20your%20fear%20of%20failure.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" className="button" id="tumblr-quote" target="_blank" title="Post this quote to tumblr!">
                    <FontAwesomeIcon icon={faTumblr} className="icon" />
                </a>
                <button className="button" id="new-quote" onClick={handleClick}>New quote</button>
            </div>
        </div>
    )

}

export default QuotesBox;