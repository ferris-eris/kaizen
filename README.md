- sematic-ui-react
    - `yarn add semantic-ui-react semantic-ui-css`
    - `index.tsx`に`import 'semantic-ui-css/semantic.min.css'`を追加
- react-router
    - `yarn add react-router react-router-dom @types/react-router @types/react-router-dom`
    - `index.tsx`に`import { BrowserRouter } from 'react-router-dom';`を追加
    - `index.tsx`を以下のように変更
        ```
        ReactDOM.render(<App />, document.getElementById('root'));
        ```

        ```
        ReactDOM.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
            document.getElementById('root'),
        );
        ```

    - App.tsx
        - `import { Redirect, Route, Switch } from 'react-router';`
        - `import Home from '../components/Home';`
        - `import Kaizens from '../components/Kaizens';`



- react-helmet
    - `yarn add react-helmet @types/react-helmet`
        