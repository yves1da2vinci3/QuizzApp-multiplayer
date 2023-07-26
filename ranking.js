function Ranking (participants) {
    const sortedParticipants = participants.sort((a, b) => b.points - a.points);
    return sortedParticipants
}
export default Ranking