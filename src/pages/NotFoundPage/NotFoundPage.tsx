import MainLayout from '../../layouts/MainLayout/MainLayout';
import ErrorInfo from '../../components/ErrorInfo/ErrorInfo';

import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <MainLayout>
            <section className="section-error">
                <div className="container center section-error__container">
                    <div className="section-error__content">
                        <ErrorInfo />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default NotFoundPage;
