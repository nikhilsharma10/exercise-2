import ReactHtmlParser from 'react-html-parser';
import Countdown from 'react-countdown';

const ProductCard = (props) => {
    let monthlyCost = String(props.productDetails.monthly_cost);
    monthlyCost = monthlyCost.substring(0, monthlyCost.length -2);
    let wasMonthlyCost = String(props.productDetails.was_monthly_cost);
    wasMonthlyCost = wasMonthlyCost.substring(0, wasMonthlyCost.length -2);

    let priceChange = false;
    if (parseInt(monthlyCost) <  parseInt(wasMonthlyCost)) {
        priceChange = "was <span class='old--price'>£" + String(wasMonthlyCost) + " </span>";
    }

    const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return null;
        } else {
            return <span className="countdown--timer" >{days}d {hours}h {minutes}m {seconds}s</span>;
        }
    };

    let hideCountdown = false;
    let renderer = ""
    let countdownLabel;
    if (props.productDetails.countdown_text !== undefined) {
        hideCountdown = true;
        countdownLabel = "<div class='lower-price__text'>Price has never been lower<div>";
        renderer = <Countdown date={props.productDetails.countdown_end_time} renderer={countdownRenderer}></Countdown>;
    }

    return (
        <div className="product-card-v3_product_card">
            <div className="product-card-v3_product_card__wrap">

                { hideCountdown ? <div className="product-card-v3_product_card__countdown" >
                    { ReactHtmlParser(countdownLabel)}
                    { renderer }
                </div> : null }

                <div className="product-card-v3_product_card__bundle">
                    <div className="product-card-v3_product_card__bundle__sim">
                        <svg className="product-card-v3_product_card__bundle__sim__icon" width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.876 0.938576L59.118 18.3407C59.682 18.945 60 19.7614 60 20.6164L60 86.7857C60 88.56 58.656 90 57 90H3C1.344 90 -3.8147e-06 88.56 -3.8147e-06 86.7857L-3.8147e-06 3.21429C-3.8147e-06 1.44 1.344 0 3 0H40.758C41.55 0 42.318 0.340721 42.876 0.938576Z" fill="#5514B4"></path></svg>
                        <div className="product-card-v3_product_card__bundle__sim__count">
                            <div className="product-card-v3_product_card__bundle__sim__count__digit s2">{props.productDetails.sim_count}</div>
                            <div className="product-card-v3_product_card__bundle__sim__count__text">SIMs</div>
                        </div>
                    </div>
                    <div className="product-card-v3_product_card__bundle__allowance">
                        <span className="product-card-v3_product_card__bundle__allowance__data s2">{props.productDetails.data_allowance}GB</span>
                        <span></span>
                        <div className="product-card-v3_product_card__bundle__allowance__data_desc">data allowance each</div>
                    </div>
                </div>
                <div className="product-card-v3_product_card__features">
                    <div className="product-card-v3_product_card__features__item">4G and 5G enabled</div>
                    <div className="product-card-v3_product_card__features__item">Unlimited minutes and texts</div>
                    <div className="product-card-v3_product_card__features__item">Access to 5 million BT Wi-fi hotspots</div>
                    <div className="product-card-v3_product_card__features__item">30-day money-back guarantee</div>
                </div>
                <div className="price-card-v3_price_card">
                    <div className="price-card-v3_price_card__monthly_price">
                        <span className="price-card-v3_price_card__monthly_price__major">{ReactHtmlParser(priceChange)}</span>
                        <span className="price-card-v3_price_card__monthly_price__major s2">
                            £{monthlyCost}
                        </span>
                        <sup className="bold price-card-v3_terms_symbol">Δ</sup>
                        <span>&nbsp;a month</span>
                    </div>
                    <div className="price-card-v3_price_card__features">
                        <div className="price-card-v3_price_card__features__item price-card-v3_price_card__features__item_featured">£32&nbsp;a month Family SIM saving</div>
                        <div className="price-card-v3_price_card__features__item">12-month contract</div>
                    </div>
                    <div>
                        <button className="button_cta button_pink">Choose plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;