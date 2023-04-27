import { ReactNode } from 'react';

const LayoutRoot = ({ children }: { children: ReactNode }) => {  
    return <div className="h-100 d-flex f-justify-center f-align-items">{children}</div>
}

export default LayoutRoot;