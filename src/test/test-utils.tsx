import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';

const AllTheProviders = ({
    children,
}: {
    children: ReactNode;
}): ReactElement => {
    return <>{children}</>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
    // eslint-disable-next-line
): any => render(ui, { wrapper: AllTheProviders, ...options });

const ReduxProvider = (
    { children }: { children: ReactNode },
    withMemoryRouter = false
): ReactElement => {
    if (withMemoryRouter) {
        // store config will be added heir after install redux:
        return <div>{children}</div>;
    }
    return <div>{children}</div>;
};

const renderWithStore = (
    ui: ReactElement,
    withMemoryRouter?: boolean,
    options?: Omit<RenderOptions, 'wrapper'>
    // eslint-disable-next-line
): any =>
    render(ui, {
        wrapper: withMemoryRouter
            ? ReduxProvider.bind(withMemoryRouter)
            : ReduxProvider,
        ...options,
    });

export * from '@testing-library/react';
export { customRender as render, renderWithStore };
