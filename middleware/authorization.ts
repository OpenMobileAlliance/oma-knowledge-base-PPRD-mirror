import members from '../public/data/oma-members.json';

export default defineNuxtRouteMiddleware(async (to, from) => { 
    if (to.path.startsWith('/guidelines')) {
        const user = useSupabaseUser();

        // Ensure the user is logged in
        if (!user.value) {
            return abortNavigation('You must be logged in to access this page.');
        }

        const username = user.value.user_metadata?.preferred_username;
        const email = user.value.user_metadata?.email;

        // Check if user is part of OMA Members
        const isOMAUser = members.some(
            (member) => member.username === username && member.email === email
        );

        if (!isOMAUser) {
            return abortNavigation('You are not part of OMA Members. Please contact the administrator.');
        }
    }
});
