import styles from './banner.module.scss'

import img1 from '/assets/img/natureza.jpg'
import img2 from '/assets/img/livro.jpg'
import img3 from '/assets/img/minimalismo.jpg'

export default function Banner_About(){
    return(
        <section className={styles.banner_about}>
            
              <div className={styles.imgs_banners}>
                    <img src={img1} alt="natureza" />
                    <img src={img2} alt="livro" />
                    <img src={img3} alt="minimalismo" />
                </div>

                <div className={styles.banner_word}>
                    <span>designs</span>
                    <span>minimalismo</span>
                    <span>natureza</span>
                    <span>músicas</span>
                    <span>livros</span>
                    <span>games</span>

                    <svg width="198" height="201" viewBox="0 0 198 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M98.9555 0.895508V42.1212H98.3555V0.895508H98.9555Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M64.7357 6.81689L78.8332 45.5535L78.2693 45.7587L64.1719 7.02209L64.7357 6.81689Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.6081 24.1074L61.0879 55.6698L60.6282 56.0555L34.1484 24.4931L34.6081 24.1074Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.1907 50.6255L47.8946 71.2488L47.5944 71.7683L11.8906 51.145L12.1907 50.6255Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.21349 83.2402L40.8117 90.3936L40.7076 90.9844L0.109375 83.8311L0.21349 83.2402Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.109375 117.96L40.7076 110.807L40.8117 111.398L0.21349 118.551L0.109375 117.96Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.8906 150.625L47.5944 130.023L47.8943 130.543L12.1905 151.145L11.8906 150.625Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.1484 177.298L60.6282 145.735L61.0879 146.121L34.6081 177.683L34.1484 177.298Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M64.1719 194.769L78.2693 156.032L78.8332 156.237L64.7357 194.974L64.1719 194.769Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M98.3555 200.896V159.67H98.9555V200.896H98.3555Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M132.574 194.974L118.477 156.237L119.04 156.032L133.138 194.769L132.574 194.974Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M162.704 177.684L136.203 146.121L136.663 145.735L163.163 177.298L162.704 177.684Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M185.098 151.166L149.395 130.543L149.695 130.023L185.398 150.647L185.098 151.166Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M197.079 118.551L156.48 111.398L156.585 110.807L197.183 117.96L197.079 118.551Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M197.183 83.8311L156.585 90.9844L156.48 90.3936L197.079 83.2402L197.183 83.8311Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M185.398 51.1662L149.694 71.7685L149.395 71.2489L185.098 50.6465L185.398 51.1662Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M163.163 24.4932L136.663 56.0557L136.203 55.6698L162.704 24.1074L163.163 24.4932Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M133.138 7.02209L119.04 45.7587L118.477 45.5535L132.574 6.81689L133.138 7.02209Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M88.7472 42.9688L92.9513 66.834L92.3604 66.9381L88.1562 43.0728L88.7472 42.9688Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M69.5315 49.8359L81.6419 70.8357L81.1221 71.1355L69.0117 50.1357L69.5315 49.8359Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M53.8228 62.8906L72.3963 78.4522L72.011 78.9121L53.4375 63.3505L53.8228 62.8906Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M43.5175 80.5127L66.2952 88.7955L66.0902 89.3594L43.3125 81.0766L43.5175 80.5127Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M39.8828 100.596H64.1037V101.196H39.8828V100.596Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M43.3125 120.714L66.0902 112.431L66.2952 112.995L43.5175 121.278L43.3125 120.714Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M53.4375 138.44L72.011 122.878L72.3963 123.338L53.8228 138.899L53.4375 138.44Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M69.0117 151.656L81.1221 130.656L81.6419 130.956L69.5315 151.955L69.0117 151.656Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M88.1562 158.718L92.3604 134.853L92.9513 134.957L88.7472 158.822L88.1562 158.718Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M108.573 158.822L104.348 134.957L104.938 134.853L109.164 158.718L108.573 158.822Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M127.784 151.955L115.652 130.955L116.172 130.655L128.303 151.655L127.784 151.955Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M143.474 138.899L124.922 123.338L125.307 122.878L143.86 138.44L143.474 138.899Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M157.429 101.196H133.188V100.596H157.429V101.196Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M153.981 81.0765L131.225 89.3593L131.02 88.7955L153.776 80.5127L153.981 81.0765Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M153.776 121.278L131.02 112.995L131.225 112.431L153.981 120.714L153.776 121.278Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M143.86 63.3503L125.307 78.9119L124.922 78.4522L143.474 62.8906L143.86 63.3503Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M128.303 50.1356L116.172 71.1354L115.652 70.8352L127.784 49.8354L128.303 50.1356Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M109.164 43.0729L104.938 66.9381L104.348 66.8336L108.573 42.9683L109.164 43.0729Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M98.9555 66.3413V80.5852H98.3555V66.3413H98.9555Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M87.1185 68.3311L91.9919 81.7174L91.4281 81.9226L86.5547 68.5363L87.1185 68.3311Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M76.6702 74.2437L85.8315 85.1409L85.3722 85.527L76.2109 74.6298L76.6702 74.2437Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M68.8745 83.3589L81.215 90.4913L80.9147 91.0108L68.5742 83.8784L68.8745 83.3589Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M64.6781 94.5977L78.7129 97.0658L78.6089 97.6567L64.5742 95.1886L64.6781 94.5977Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M64.5742 106.603L78.6089 104.135L78.7129 104.726L64.6781 107.194L64.5742 106.603Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M68.5742 117.913L80.9147 110.78L81.215 111.3L68.8745 118.432L68.5742 117.913Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M76.2109 127.162L85.3722 116.265L85.8315 116.651L76.6702 127.548L76.2109 127.162Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M86.5547 133.254L91.4281 119.868L91.9919 120.073L87.1185 133.46L86.5547 133.254Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M98.3555 135.448V121.205H98.9555V135.448H98.3555Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M110.19 133.46L105.316 120.073L105.88 119.868L110.754 133.254L110.19 133.46Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M120.621 127.548L111.48 116.65L111.94 116.265L121.081 127.162L120.621 127.548Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M128.415 118.432L116.074 111.3L116.374 110.78L128.715 117.913L128.415 118.432Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M132.611 107.194L118.598 104.726L118.702 104.135L132.716 106.603L132.611 107.194Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M132.716 95.1886L118.702 97.6567L118.598 97.0658L132.611 94.5977L132.716 95.1886Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M128.715 83.8784L116.374 91.0108L116.074 90.4913L128.415 83.3589L128.715 83.8784Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M121.081 74.6292L111.94 85.5265L111.48 85.1409L120.621 74.2437L121.081 74.6292Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M110.754 68.5363L105.88 81.9226L105.316 81.7174L110.19 68.3311L110.754 68.5363Z" fill="#fff" />
                    </svg>

                </div>
        </section>
    )
}