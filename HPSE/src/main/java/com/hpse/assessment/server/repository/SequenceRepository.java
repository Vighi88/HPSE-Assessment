package com.hpse.assessment.server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hpse.assessment.server.model.SequenceId;
@Repository
public interface SequenceRepository extends MongoRepository<SequenceId, String>{

	SequenceId findById(String id);
	
	
}
