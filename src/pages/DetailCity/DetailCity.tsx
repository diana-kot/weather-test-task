import MainLayout from '../../layouts/MainLayout/MainLayout';

import SectionDetailCity from '../../components/SectionDetailCity/SectionDetailCity';

function DetailCity() {
    return (
        <MainLayout gradient={true}>
            <div className="city-page">
                <SectionDetailCity />
            </div>
        </MainLayout>
    );
}

export default DetailCity;
