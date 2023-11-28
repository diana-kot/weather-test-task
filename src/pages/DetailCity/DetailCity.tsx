import MainLayout from '../../layouts/MainLayout/MainLayout';
import { useWindowWidth } from 'hook/useWindowWidth';

import SectionDetailCity from '../../components/SectionDetailCity/SectionDetailCity';

function DetailCity() {
    const windowWidth = useWindowWidth();

    return (
        <MainLayout gradient={true} enableHeader={windowWidth > 560 ? true : false} >
            <div className="city-page">
                <SectionDetailCity />
            </div>
        </MainLayout>
    );
}

export default DetailCity;

