/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSourceCollectionFromDiscriminatorValue, serializeSourceCollection, type SourceCollection } from '@microsoft/msgraph-beta-sdk/models/ediscovery/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AdditionalSourcesRequestBuilderNavigationMetadata, AdditionalSourcesRequestBuilderRequestsMetadata, AdditionalSourcesRequestBuilderUriTemplate, type AdditionalSourcesRequestBuilder } from './additionalSources/';
import { AddToReviewSetOperationRequestBuilderRequestsMetadata, AddToReviewSetOperationRequestBuilderUriTemplate, type AddToReviewSetOperationRequestBuilder } from './addToReviewSetOperation/';
import { CustodianSourcesRequestBuilderNavigationMetadata, CustodianSourcesRequestBuilderRequestsMetadata, CustodianSourcesRequestBuilderUriTemplate, type CustodianSourcesRequestBuilder } from './custodianSources/';
import { LastEstimateStatisticsOperationRequestBuilderRequestsMetadata, LastEstimateStatisticsOperationRequestBuilderUriTemplate, type LastEstimateStatisticsOperationRequestBuilder } from './lastEstimateStatisticsOperation/';
import { MicrosoftGraphEdiscoveryEstimateStatisticsRequestBuilderRequestsMetadata, MicrosoftGraphEdiscoveryEstimateStatisticsRequestBuilderUriTemplate, type MicrosoftGraphEdiscoveryEstimateStatisticsRequestBuilder } from './microsoftGraphEdiscoveryEstimateStatistics/';
import { MicrosoftGraphEdiscoveryPurgeDataRequestBuilderRequestsMetadata, MicrosoftGraphEdiscoveryPurgeDataRequestBuilderUriTemplate, type MicrosoftGraphEdiscoveryPurgeDataRequestBuilder } from './microsoftGraphEdiscoveryPurgeData/';
import { NoncustodialSourcesRequestBuilderNavigationMetadata, NoncustodialSourcesRequestBuilderRequestsMetadata, NoncustodialSourcesRequestBuilderUriTemplate, type NoncustodialSourcesRequestBuilder } from './noncustodialSources/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sourceCollections property of the microsoft.graph.ediscovery.case entity.
 */
export interface SourceCollectionItemRequestBuilder extends BaseRequestBuilder<SourceCollectionItemRequestBuilder> {
    /**
     * Provides operations to manage the additionalSources property of the microsoft.graph.ediscovery.sourceCollection entity.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get additionalSources(): AdditionalSourcesRequestBuilder;
    /**
     * Provides operations to manage the addToReviewSetOperation property of the microsoft.graph.ediscovery.sourceCollection entity.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get addToReviewSetOperation(): AddToReviewSetOperationRequestBuilder;
    /**
     * Provides operations to manage the custodianSources property of the microsoft.graph.ediscovery.sourceCollection entity.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get custodianSources(): CustodianSourcesRequestBuilder;
    /**
     * Provides operations to manage the lastEstimateStatisticsOperation property of the microsoft.graph.ediscovery.sourceCollection entity.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get lastEstimateStatisticsOperation(): LastEstimateStatisticsOperationRequestBuilder;
    /**
     * Provides operations to call the estimateStatistics method.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get microsoftGraphEdiscoveryEstimateStatistics(): MicrosoftGraphEdiscoveryEstimateStatisticsRequestBuilder;
    /**
     * Provides operations to call the purgeData method.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get microsoftGraphEdiscoveryPurgeData(): MicrosoftGraphEdiscoveryPurgeDataRequestBuilder;
    /**
     * Provides operations to manage the noncustodialSources property of the microsoft.graph.ediscovery.sourceCollection entity.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get noncustodialSources(): NoncustodialSourcesRequestBuilder;
    /**
     * Delete a sourceCollection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     * @see {@link https://learn.microsoft.com/graph/api/ediscovery-sourcecollection-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Returns a list of sourceCollection objects associated with this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SourceCollection
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     get(requestConfiguration?: RequestConfiguration<SourceCollectionItemRequestBuilderGetQueryParameters> | undefined) : Promise<SourceCollection | undefined>;
    /**
     * Update the properties of a sourceCollection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SourceCollection
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     * @see {@link https://learn.microsoft.com/graph/api/ediscovery-sourcecollection-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: SourceCollection, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SourceCollection | undefined>;
    /**
     * Delete a sourceCollection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Returns a list of sourceCollection objects associated with this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SourceCollectionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a sourceCollection object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     toPatchRequestInformation(body: SourceCollection, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Returns a list of sourceCollection objects associated with this case.
 */
export interface SourceCollectionItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SourceCollectionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SourceCollectionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof SourceCollectionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    additionalSources: {
        uriTemplate: AdditionalSourcesRequestBuilderUriTemplate,
        requestsMetadata: AdditionalSourcesRequestBuilderRequestsMetadata,
        navigationMetadata: AdditionalSourcesRequestBuilderNavigationMetadata,
    },
    addToReviewSetOperation: {
        uriTemplate: AddToReviewSetOperationRequestBuilderUriTemplate,
        requestsMetadata: AddToReviewSetOperationRequestBuilderRequestsMetadata,
    },
    custodianSources: {
        uriTemplate: CustodianSourcesRequestBuilderUriTemplate,
        requestsMetadata: CustodianSourcesRequestBuilderRequestsMetadata,
        navigationMetadata: CustodianSourcesRequestBuilderNavigationMetadata,
    },
    lastEstimateStatisticsOperation: {
        uriTemplate: LastEstimateStatisticsOperationRequestBuilderUriTemplate,
        requestsMetadata: LastEstimateStatisticsOperationRequestBuilderRequestsMetadata,
    },
    microsoftGraphEdiscoveryEstimateStatistics: {
        uriTemplate: MicrosoftGraphEdiscoveryEstimateStatisticsRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftGraphEdiscoveryEstimateStatisticsRequestBuilderRequestsMetadata,
    },
    microsoftGraphEdiscoveryPurgeData: {
        uriTemplate: MicrosoftGraphEdiscoveryPurgeDataRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftGraphEdiscoveryPurgeDataRequestBuilderRequestsMetadata,
    },
    noncustodialSources: {
        uriTemplate: NoncustodialSourcesRequestBuilderUriTemplate,
        requestsMetadata: NoncustodialSourcesRequestBuilderRequestsMetadata,
        navigationMetadata: NoncustodialSourcesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SourceCollectionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSourceCollectionFromDiscriminatorValue,
        queryParametersMapper: SourceCollectionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSourceCollectionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSourceCollection,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SourceCollectionItemRequestBuilderUriTemplate = "{+baseurl}/compliance/ediscovery/cases/{case%2Did}/sourceCollections/{sourceCollection%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */