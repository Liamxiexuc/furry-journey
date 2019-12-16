import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/MyCoupons.scss';
import FlexContainer from '../../../UI/flexContainer/FlexContainer';
import { ITEM_CLIENT_BASE_URL } from './../../../routes/URLMap';

const MyCoupons = () => {
    return (
      <FlexContainer
        classNameName="coupon-container"
        justifyContentValue="space-between"
      >
        <div className="coupon-item">
          <div className="style-five">
            <div className="info-box">
              <p className="nick">NewBee Pizza's Coupon</p>
              <div className="coupon-money">
                <div className="lay of">
                  $<em>2</em>
                </div>
                <div className="lay">
                  <p className="tit">优惠</p>
                  <p className="demand">满10元可用</p>
                </div>
              </div>
            </div>
            <NavLink to={ITEM_CLIENT_BASE_URL} className="get-btn">
              <span>Buy</span>
            </NavLink>
          </div>
        </div>
        <div className="coupon-item">
          <div className="style-five">
            <div className="info-box">
              <p className="nick">NewBee Pizza's Coupon</p>
              <div className="coupon-money">
                <div className="lay of">
                  $<em>5</em>
                </div>
                <div className="lay">
                  <p className="tit">优惠</p>
                  <p className="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <NavLink to={ITEM_CLIENT_BASE_URL} className="get-btn">
              <span>Buy</span>
            </NavLink>
          </div>
        </div>
      </FlexContainer>
    );
}

export default MyCoupons;