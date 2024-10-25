<!--  ShSegment must NOT be deleted -->
::ShSegment
::
<!--  ShSegment must NOT be deleted -->

::ShMicroCard
---
ui:
    wrapper: microCard col-start-1 col-span-1 w-1/3 mb-6 backdrop-blur min-w-min #do NOT delete microCard class in order to have floating effect
    image: -mt-1 mb-5 rounded-lg
    title: text-golden dark:text-golden
    subtitle: text-golden/[0.5] dark:text-golden/[0.5] animate-pulse
title: SVE-42 Test Event
subtitle: Click for more info
urlWrapper: oma-events/test-events#next-test-event
urlImage: /images/events/postponed.png
---
::

::ShMicroCard
---
ui:
    wrapper: microCard col-start-2 col-span-1 w-1/3 mb-6 backdrop-blur min-w-min #do NOT delete microCard class in order to have floating effect
    image: -mt-1 mb-5 rounded-lg
    title: text-golden dark:text-golden
    subtitle: text-golden/[0.5] dark:text-golden/[0.5] animate-pulse
title: Members Meeting
subtitle: Click for more info
urlWrapper: /oma-events/members-meetings
urlImage: /images/events/postponed.png
---
::

<style>
@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }

  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }

  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

.microCard {
  align-items: center;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}
</style>