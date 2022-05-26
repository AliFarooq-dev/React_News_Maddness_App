import Navbar from './Components/Navbar'
import New from './Components/New'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
    const pageSize = 21;
    const language = 'en';
    const apiKey = process.env.REACT_APP_NEWS_API;
    const [progress, setprogress] = useState(10);

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <LoadingBar
                    color='#f11946'
                    progress={progress}
                    height={2}
                    loaderSpeed={300}
                />
                <Routes>
                    <Route exact path="/" element={<New setProgress={setprogress} pageSize={pageSize} category='general' key={"general"} language={language} apiKey={apiKey} />} />
                    <Route exact path="/entertainment" element={<New setProgress={setprogress} pageSize={pageSize} category='entertainment' key={"entertainment"} language={language} apiKey={apiKey} />} />
                    <Route exact path="/business" element={<New setProgress={setprogress} pageSize={pageSize} category='business' key={"business"} language={language} apiKey={apiKey} />} />
                    <Route exact path="/health" element={<New setProgress={setprogress} pageSize={pageSize} category='health' key={"health"} language={language} apiKey={apiKey} />} />
                    <Route exact path="/science" element={<New setProgress={setprogress} pageSize={pageSize} category='science' key={"science"} language={language} apiKey={apiKey} />} />
                    <Route exact path="/sports" element={<New setProgress={setprogress} pageSize={pageSize} category='sports' key={"sports"} language={language} apiKey={apiKey} />} />
                    <Route exact path="/technology" element={<New setProgress={setprogress} pageSize={pageSize} category='technology' key={"technology"} language={language} apiKey={apiKey} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App


