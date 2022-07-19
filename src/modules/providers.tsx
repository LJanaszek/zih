import React from "react";
import { ConfigModuleProvider } from "./config";
import { GameModuleProvider } from "./game";
import { MainModuleProvider } from "./main";

const providersList: React.FunctionComponent<React.PropsWithChildren>[] = [
    MainModuleProvider,
    ConfigModuleProvider,
    GameModuleProvider
]

const ModulesProviders = ({ children }: React.PropsWithChildren) => {
    return providersList.reduce((Prev, Next) => {
        return (
            <Next>
                {Prev}
            </Next>
        )
    }, (<>{children}</>))
}

export default ModulesProviders;
