package com.hpse.assessment.server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hpse.assessment.server.model.Requests;

public interface RequestRepository extends MongoRepository<Requests, String>{


}
