import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'react-bootstrap';
import { BsPlus } from "react-icons/bs";
import { getPeople } from '../../api/starWarsCharacters';
import { getRandomNumberInteger, removeDuplicate } from '../../utils/utils';
import { Character } from '../../models/starWarsCharacter';
import { Npri } from '../../models/Npri';
import { Mineral } from '../../models/MineralInterest';
import Table from '../../components/Table';
import MineralInterest from '../../components/MineralInterest';
import NPRI from '../../components/NPRI';

const StyledButton = styled(Button)`
  margin-top: 3%;
`;

const addMineralInterest = (people: Character[], mineralList: Mineral[]) => {
  const idMineral = getRandomNumberInteger(1, people.length);
  const person = people.find((person: Character) => person.id === idMineral);
  const mineralArray = person ? [{ id: person.id, name: person.name, homeworld: person.homeworld, affiliations: person.affiliations, npris: [] }] : [];
  const newMineralList = mineralList.concat(mineralArray);
  return removeDuplicate(newMineralList, "id");
};

const removeMineralInterest = (id: number, mineralList: Mineral[]) => {
  const index = mineralList.findIndex((value: Mineral) => value.id === id);
  mineralList.splice(index, 1);
  return [...mineralList];
};

const addNpriValue = (mineral: Mineral) => {
  const { affiliations, npris } = mineral;
  const idNpri = getRandomNumberInteger(0, affiliations.length - 1);
  const npri = affiliations[idNpri];
  const npriArrayt = { id: idNpri, name: npri };
  npris?.push(npriArrayt);
  const newNpriList = npris ? [...npris] : [];
  return removeDuplicate(newNpriList, "id");
};

const removeNpriValue = (idNpri: number, mineral: Mineral) => {
  const { npris } = mineral;
  if (npris) {
    const index = npris.findIndex((value: Npri) => value.id === idNpri);
    npris.splice(index, 1);
    return [...npris];
  }
};

const Challenge = () => {

  const [people, setPeople] = useState<Character[]>([]);
  const [mineralsInterests, setMineralsInterests] = useState<Mineral[]>([]);

  const findMineral = (idMineral: number) => (
    mineralsInterests.find((mineral: Mineral) => mineral.id === idMineral)
  );

  const addMineral = () => setMineralsInterests(addMineralInterest(people, mineralsInterests));
  const removeMineral = (idColum: number) => setMineralsInterests(removeMineralInterest(idColum, mineralsInterests));

  const addNpri = (idMineral: number) => {
    const mineral = findMineral(idMineral);

    if (mineral) {
      mineral.npris = addNpriValue(mineral);
      setMineralsInterests([...mineralsInterests]);
    }
  };

  const removeNpri = (idColum: number, idMineral: number) => {
    const mineral = findMineral(idMineral);

    if (mineral) {
      mineral.npris = removeNpriValue(idColum, mineral);
      setMineralsInterests([...mineralsInterests]);
    }
  };

  useEffect(() => {
    getPeople().then(response => setPeople(response.data));
  }, []);

  return (
    <>
      <Table>
        {mineralsInterests.map((mineral: Mineral, index: number) => (
          <>
            <MineralInterest mineralInterest={mineral} onClick={removeMineral} />
            {mineral?.npris?.map((npri: Npri) => (
              <NPRI npri={npri} onClick={(idCol: number) => removeNpri(idCol, mineral.id)} />
            ))}
            <Row key={index * 100}>
              <Col md={{ span: 2, offset: 1 }}>
                <Button
                  variant="outline-secondary"
                  onClick={() => addNpri(mineral.id)}
                  disabled={mineral?.npris?.length === mineral.affiliations.length}
                >
                  <BsPlus /> NPRI
                </Button>
              </Col>
            </Row>
          </>
        ))
        }
      </Table>
      <StyledButton
        variant="outline-secondary"
        onClick={addMineral}
        disabled={people.length === mineralsInterests.length}
      ><BsPlus /> Add Mineral Interest
      </StyledButton>
    </>
  );
};

export default Challenge;