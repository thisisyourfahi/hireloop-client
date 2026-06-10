import { serverMutation } from "../core/server";

export const addSubscription = async (subInfo) => {
    return serverMutation('/api/subscriptions', subInfo);
}