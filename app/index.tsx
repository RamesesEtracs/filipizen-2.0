import { Redirect, useRootNavigationState } from "expo-router";


export default function Index() {

    //avoids navigating before the navigator is ready
    const rootNavigationState = useRootNavigationState();

    if (!rootNavigationState?.key) return null;

    return <Redirect href="/home" />;
}