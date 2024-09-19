import Ads from "../ads/Ads";
import CategoryTag from "../categoryTag/CategoryTag";
import FeatureCard from "../featureCard/FeatureCard";
import FeatureHeader from "../featureheader/FeatureHeader";
import Mostview from "../mostview/Mostview";
import Tagcontainer from "../tagcontainer/Tagcontainer";

 

const Aside = () => {
    return (
        <div className="aside_container">
            
            <FeatureHeader/>
            <FeatureCard/>
            <Ads/>
            <Mostview/>
            <CategoryTag/>
            <Tagcontainer/>
            <Ads/>
        </div>
    );
};

export default Aside;