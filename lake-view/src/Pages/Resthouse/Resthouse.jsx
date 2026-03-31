import ResthouseHero from "./Hero/ResthouseHero";
import TrustStrip from "./TrustStrip/TrustTrip";
import Rooms from "./Rooms/Rooms";
import BookingSection from "./Booking/Booking";
import Amenities from "./Ameneties/Ameneties";
import Gallery from "./Gallery/Gallery";

import FinalResthouseCTA from "./FinalCTA/ResthouseFinalCTA";
import { useState, useRef } from "react";

export default function Cafe() {
  const [room, setRoom] = useState("");
  const RoomsSectionRef = useRef(null);
  const BookingSectionRef = useRef(null);

  return (
    <>
      <ResthouseHero RoomsSectionRef={RoomsSectionRef}></ResthouseHero>
      <TrustStrip></TrustStrip>
      <Rooms
        RoomsSectionRef={RoomsSectionRef}
        bookingSectionRef={BookingSectionRef}
        setRoom={setRoom}
      ></Rooms>
      <BookingSection
        bookingSectionRef={BookingSectionRef}
        room={room}
        setRoom={setRoom}
      ></BookingSection>
      <Amenities></Amenities>
      <Gallery></Gallery>

      <FinalResthouseCTA RoomsSectionRef={RoomsSectionRef}></FinalResthouseCTA>
    </>
  );
}
