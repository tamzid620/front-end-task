import footerimg from '../../../../../src/assets/icons/navImage.jpg'
import socialMedia1 from '../../../../assets/icons/facebook.png'
import socialMedia2 from '../../../../assets/icons/twitter.png'
import socialMedia3 from '../../../../assets/icons/linkedin.png'
import fonts from '../../../config/fontsProvider';

const Footer = () => {
    return (
        <div className='flex justify-center border-t-2 border-[#D6FB00] mt-20'>
            <footer 
            style={{ fontFamily: fonts.nunito }}
             className="footer footer-center p-10 text-center text-white">
                <div className=''>
                    <div className='flex justify-center my-8'>
                    <img className='w-[150px] drop-shadow-lg' src={footerimg} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                        Azraelle language club <br />providing an exceptional experience since 2023
                    </p>
                    <p >Copyright © 2023 - All right reserved</p>
                </div>
                    <div className="flex justify-center items-center gap-5 my-8">
                       <img className='w-[35px] drop-shadow-lg' src={socialMedia1} alt="" />
                       <img className='w-[35px] drop-shadow-lg' src={socialMedia2} alt="" />
                       <img className='w-[35px] drop-shadow-lg' src={socialMedia3} alt="" />
                    </div>
            </footer>
        </div>
    );
};

export default Footer;