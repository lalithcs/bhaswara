import finalm from './posters/CSE/finalm.jpg';
import debdar from './posters/CSE AIML/debdar.png';
import mysthus from './posters/CSE AIML/mysthus.png';
import postai from './posters/CSE AIML/postai.png';
import squidai from './posters/CSE AIML/squidai.png';
import funbyte from './posters/CSE DS/funbyte.png';
import mystmar from './posters/CSE DS/mystmar.png';
import squidds from './posters/CSE DS/squidds.png'; 
import esccs from './posters/CSE-CS/esccs.png';
import lcacs from './posters/CSE-CS/lcacs.png';
import spycs from './posters/CSE-CS/spycs.png';
import electamb from './posters/EEE/electamb.jpg';
import enerhub from './posters/EEE/enerhu.jpg';
import expoeee from './posters/EEE/expoeee.png';
import posteee from './posters/EEE/posteee.jpg';    
import igni from './posters/MBA/igni.jpg'
import markmast from './posters/MBA/markmast.jpg'
import modmav from './posters/MBA/modmav.png'
import papermba from './posters/MBA/papermba.png'
import quizmba from './posters/MBA/quizmba.png'
import postmba from './posters/MBA/postmba.jpg'
import brain from './posters/CIVIL/brain.jpg'
import draft from './posters/CIVIL/draft.jpg'
import great from './posters/CIVIL/great.jpg'
import papercivil from './posters/CIVIL/papercivil.jpg'
import postcivil from './posters/CIVIL/postcivil.jpg'
import projcivil from './posters/CIVIL/projcivil.jpg'
import goc from './posters/IT & IOT/GOC.jpg'
import bgmi from './posters/IT & IOT/bgmi.jpg'
import iotesc from './posters/IT & IOT/iotesc.png'

const postdept = {
    CSE: {
        general: [finalm],
        AIML: [debdar, mysthus, postai, squidai],
        DS: [funbyte, mystmar, squidds],
        CS: [esccs, lcacs, spycs],
    },
    EEE: [electamb, enerhub, expoeee, posteee],
    MBA: [igni, markmast, modmav, papermba, quizmba, postmba],
    CIVIL: [brain, draft, great, papercivil, postcivil, projcivil],
    IT: [goc, bgmi, iotesc]
};
export default postdept;